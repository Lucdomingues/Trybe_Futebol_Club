import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';

class TeamsController {
  private teamsServices = new TeamsService();

  getAll = async (req: Request, res: Response) => {
    try {
      const teams = await this.teamsServices.getAll();

      return res.status(200).json(teams);
    } catch (error) {
      return res.status(500).json('Server Error!');
    }
  };
}

export default TeamsController;
