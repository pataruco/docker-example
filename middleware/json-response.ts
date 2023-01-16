import type { Request, Response, NextFunction } from 'express';

const jsonResponse = (
  _request: Request,
  response: Response,
  next: NextFunction,
) => {
  response.setHeader('Content-type', 'application/json');
  next();
};

export default jsonResponse;
