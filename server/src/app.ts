import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { corsOptions } from './config/corsOptions';
import { Request, Response } from 'express/';
require('dotenv').config();

import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import orderRoutes from './routes/orderRoutes';
import authRoutes from './routes/authRoutes';
import adminAuthRoutes from './routes/adminAuthRoutes';
// import prisma from './utils/prismaClient';

// const main = async () => {
//   const orders = await prisma.order.deleteMany();
//   const users = await prisma.user.deleteMany();
// };

// PORT
const PORT = process.env.PORT || 4000;

// Express app
const app = express();

// Middlwares
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/auth/admin', adminAuthRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

// Handle not existing routes
app.all('*', (req: Request, res: Response) => {
  res.status(400).json({ messasge: '404 Not Found' });
});

// server start to listin to request
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// main();
