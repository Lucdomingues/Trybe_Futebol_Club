import ITeam from '../interfaces/ITeam';
import Team from '../database/models/Team';

export default class TeamsService {
  private teamsModel = Team;

  getAll = async (): Promise<ITeam[]> => {
    const teams = await this.teamsModel.findAll();

    return teams;
  };
}
