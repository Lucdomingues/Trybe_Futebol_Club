import Team from '../database/models/Team';
import IMatches from '../interfaces/IMatches';
import Matche from '../database/models/Matche';

export default class MatchesServices {
  private matchesModel = Matche;
  private teamsModel = Team;

  getAll = async (): Promise<IMatches[]> => {
    const matches = await this.matchesModel.findAll({
      include: [{
        model: Team,
        as: 'homeTeam',
        attributes: { exclude: ['id'] },
      },
      {
        model: Team,
        as: 'awayTeam',
        attributes: { exclude: ['id'] },
      },
      ],
    });

    return matches;
  };

  static convertToBool = (string: string) => {
    let isSet;

    if (string.toLowerCase() === 'true') {
      isSet = true;
    }
    if (string.toLowerCase() === 'false') {
      isSet = false;
    }
    return isSet;
  };

  getProgress = async (status: string) => {
    const inProgress = MatchesServices.convertToBool(status) as boolean;
    const matchesProgress = await this.matchesModel.findAll({
      where: { inProgress },
      include: [{
        model: Team,
        as: 'homeTeam',
        attributes: { exclude: ['id'] },
      },
      {
        model: Team,
        as: 'awayTeam',
        attributes: { exclude: ['id'] },
      },
      ],
    });

    return matchesProgress;
  };

  matcheFinish = async (id: string | number) => {
    await this.matchesModel.update(
      { inProgress: false },
      { where: { id } },
    );

    return true;
  };

  matcheUpdate = async (id: string | number, homeTeamGoals: number, awayTeamGoals: number) => {
    await this.matchesModel.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
  };

  matcheCreate = async (newMatche: IMatches) => {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = newMatche;

    const teamHome = await this.teamsModel.findByPk(homeTeamId);
    const teamAway = await this.teamsModel.findByPk(awayTeamId);

    if (!teamHome || !teamAway) {
      return { type: 404, message: 'There is no team with such id!' };
    }

    if (homeTeamId === awayTeamId) {
      return { type: 422, message: 'It is not possible to create a match with two equal teams' };
    }

    const matcheCreated = await this.matchesModel.create({
      homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals, inProgress: true,
    });

    return { type: null, message: matcheCreated };
  };
}
