import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/*', (request: Request, response: Response) => {
  const { params } = request;
  return response.status(200).send({ params });
});

export default router;
