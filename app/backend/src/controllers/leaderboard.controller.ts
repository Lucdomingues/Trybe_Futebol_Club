import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderboard.service';

class LeaderBoardController {
  private leaderBoardService = new LeaderBoardService();

  getAll = async (req: Request, res: Response) => {
    try {
      const [results] = await this.leaderBoardService.getAll();

      return res.status(200).json(results);
    } catch (error) {
      return res.status(500).json('Server Errors!');
    }
  };

  getAllTeam = async (req: Request, res: Response) => {
    try {
      const [results] = await this.leaderBoardService.getAllTeam();

      return res.status(200).json(results);
    } catch (error) {
      return res.status(500).json('Server Error!');
    }
  };

  getAllAway = async (req: Request, res: Response) => {
    try {
      const [results] = await this.leaderBoardService.getAllAway();

      return res.status(200).json(results);
    } catch (error) {
      return res.status(500).json('Server Error!');
    }
  };
}

export default LeaderBoardController;
