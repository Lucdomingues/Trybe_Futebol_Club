import { Request, Response } from 'express';
import MatchesServices from '../services/matches.service';

class MatchesController {
  private matchesServices = new MatchesServices();

  getAll = async (_req: Request, res: Response) => {
    try {
      const matches = await this.matchesServices.getAll();

      return res.status(200).json(matches);
    } catch (error) {
      return res.status(500).json('Server Error!');
    }
  };

  // getById = async (req: Request, res: Response) => {
  //     try {
  //         const { id } = req.params;

  //         const team = await this.teamsServices.getById(id);

  //         return res.status(200).json(team);
  //     } catch (error) {
  //         return res.status(500).json('Server Error!');
  //     }
  // };
}

export default MatchesController;
