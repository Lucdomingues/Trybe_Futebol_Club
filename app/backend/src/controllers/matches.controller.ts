import { Request, Response } from 'express';
import MatchesServices from '../services/matches.service';

class MatchesController {
  private matchesServices = new MatchesServices();

  getAllandFilters = async (req: Request, res: Response) => {
    try {
      const { inProgress } = req.query;

      if (!inProgress) {
        const matches = await this.matchesServices.getAll();

        return res.status(200).json(matches);
      }

      if (typeof inProgress !== 'string') {
        return res.status(406).json({ message: 'query type is not acceptable' });
      }

      const matchesProgress = await this.matchesServices.getProgress(inProgress);

      return res.status(200).json(matchesProgress);
    } catch (error) {
      return res.status(500).json('Server Error!');
    }
  };

  matcheFinish = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const finish = await this.matchesServices.matcheFinish(id);

      if (!finish) {
        return res.status(304).json({ message: 'unable to modify match status' });
      }

      return res.status(200).json({ message: 'Finished' });
    } catch (error) {
      return res.status(500).json('Server Error!');
    }
  };

  matcheUpdate = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { homeTeamGoals, awayTeamGoals } = req.body;

      await this.matchesServices.matcheUpdate(id, homeTeamGoals, awayTeamGoals);

      return res.status(200).json({ message: 'update gols' });
    } catch (error) {
      return res.status(500).json('Server Errorr!');
    }
  };
}

export default MatchesController;
