import { Router } from 'express';
import config from '../config';
import { registerTopicRoute } from './topic/router';

export default (): Router => {
  const app = Router();

  //TODO: add routes here...
  app.get(config.api.topic, registerTopicRoute()); // /topic
  // app.post(config.api.user, middleware, handleUser);
  // app.put();
  // app.delete();

  return app;
};
