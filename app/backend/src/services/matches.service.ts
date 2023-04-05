import Team from '../database/models/Team';
import IMatches from '../interfaces/IMatches';
import Matche from '../database/models/Matche';

export default class MatchesServices {
  private matchesModel = Matche;

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
}
