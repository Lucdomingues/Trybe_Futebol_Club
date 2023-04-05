import Team from '../database/models/Team';
import IMatches from '../interfaces/IMatches';
import Matche from '../database/models/Matche';

export default class MatchesServices {
  private matchesModel = Matche;

  getAll = async (): Promise<IMatches[]> => {
    const matches = await this.matchesModel.findAll({
      include: [{
        model: Team, as: 'homeTeam', attributes: { exclude: ['id'] },
      },
      {
        model: Team, as: 'awayTeam', attributes: { exclude: ['id'] },
      },
      ],
    });

    return matches;
  };

  // getById = async (id: string | number) => {
  //     const team = await this.teamsModel.findByPk(id);

  //     return team;
  // };
}
