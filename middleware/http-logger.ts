import type { Request, Response, NextFunction } from 'express';

import logger from '../lib/logger';

const httpLoggerMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { method, url, hostname, body } = request;
  const { statusCode, statusMessage } = response;
  logger.info({ request: { method, url, hostname, body } });
  logger.info({ response: { url, statusCode, statusMessage } });
  next();
};

export default httpLoggerMiddleware;
