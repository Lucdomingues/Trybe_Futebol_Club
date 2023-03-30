import ITeam from '../interfaces/ITeam';
import Team from '../database/models/Team';

export default class TeamsService {
  private teamsModel = Team;

  getAll = async (): Promise<ITeam[]> => {
    const teams = await this.teamsModel.findAll();

    return teams;
  };

  getById = async (id: string | number) => {
    const team = await this.teamsModel.findByPk(id);

    return team;
  };
}
