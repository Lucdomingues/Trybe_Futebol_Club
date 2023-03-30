import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';

class TeamsController {
  private teamsServices = new TeamsService();

  getAll = async (_req: Request, res: Response) => {
    try {
      const teams = await this.teamsServices.getAll();

      return res.status(200).json(teams);
    } catch (error) {
      return res.status(500).json('Server Error!');
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const team = await this.teamsServices.getById(id);

      return res.status(200).json(team);
    } catch (error) {
      return res.status(500).json('Server Error!');
    }
  };
}

export default TeamsController;
