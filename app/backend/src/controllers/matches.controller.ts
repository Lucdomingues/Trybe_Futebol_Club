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
}

export default MatchesController;
