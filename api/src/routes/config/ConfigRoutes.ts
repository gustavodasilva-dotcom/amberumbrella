import { Express, NextFunction, Request, Response } from 'express';
import { StatusCodes } from '../../models/StatusCodes';

const signUpRoute = require('../signUp');

export default function ConfigRoutes(app: Express) {
  const API_PREFIX = '/api';
  const V1_PREFIX = '/v1';

  app.use((req: Request, _res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.path}`);
    next();
  })

  app.use(`${API_PREFIX.concat(V1_PREFIX)}/sign-up`, signUpRoute);

  app.use((_req: Request, res: Response) => {
    res.status(StatusCodes.NotFound).json({
      error: {
        statusCode: StatusCodes.NotFound,
        message: 'Unmatched route'
      }
    });
  });
};