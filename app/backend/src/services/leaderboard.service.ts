import ILeaderBoards from '../interfaces/ILeaderBoards';
import Matche from '../database/models/Matche';
import querys from '../utils/funcsLeaderBoards';

export default class LeaderBoardService {
  private matchesModel = Matche;

  getAll = async (): Promise<ILeaderBoards[]> => {
    const allMatches = await this.matchesModel.sequelize?.query(querys.queryTeam);

    return allMatches as ILeaderBoards[];
  };

  getAllAway = async (): Promise<ILeaderBoards[]> => {
    const allMatches = await this.matchesModel.sequelize?.query(querys.querysAway);

    return allMatches as ILeaderBoards[];
  };
}
