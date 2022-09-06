import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import * as corsOptions from './config/corsOptions';
import { Request, Response } from 'express/';
import { errorHandler } from './middlewares/errorHandler';
require('dotenv').config();

// PORT
const PORT = process.env.PORT || 4000;

// Express app
const app = express();

// Middlwares
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

// Routes

// Handle not existing routes
app.all('*', (req: Request, res: Response) => {
  res.status(400).json({ messasge: '404 Not Found' });
});

// handle errors
app.use(errorHandler);

// server start to listin to request
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
