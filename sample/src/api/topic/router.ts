import { Router, Request, Response } from 'express';
import Logger from '../../loaders/logger';

const router = Router();

export const registerTopicRoute = (): Router => {
  router.get(`/:name`, handleTopic);

  return router;
};

type Snehil = {
  name: string;
  value: boolean;
};

const handleTopic = (req: Request, res: Response) => {
  const name = req.params.name;
  const variable: Snehil = {
    name: 'Snehil ,',
    value: true,
  };
  Logger.info(variable.name + ' ' + variable.value);
  res.set('x-custom-header', 'aniruddha');
  res.send(name);
};
