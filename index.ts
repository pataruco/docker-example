import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from './lib/logger';

// middlewares import
import jsonResponseMiddleware from './middleware/json-response';
import httpLoggerMiddleware from './middleware/http-logger';

// Router import
import router from './routes';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const server = express();

// JSON body parser
server.use(cors());
server.use(bodyParser.json());
server.use(jsonResponseMiddleware);
// Logger
server.use(httpLoggerMiddleware);

// Routes
server.use(router);

server.listen(PORT, () =>
  logger.info(`Server running on 📡  http://${HOST}:${PORT}`),
);
