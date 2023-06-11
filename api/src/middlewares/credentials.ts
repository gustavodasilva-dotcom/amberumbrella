import { NextFunction, Request, Response } from 'express';

import { allowedOrigins } from '../config/cors/allowedOrigins';

export default function Credentials(req: Request, res: Response, next: NextFunction) {
  const origin = req.headers.origin || '';

  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Credentials', 'true');
  }

  next();
};