import { Request, Response } from 'express';

const getOrder = (req: Request, res: Response) => {};

const getOrders = (req: Request, res: Response) => {};

const newOrder = (req: Request, res: Response) => {};

const updateOrder = (req: Request, res: Response) => {};

const deleteOrder = (req: Request, res: Response) => {};

export const orderControllers = {
  getOrder,
  getOrders,
  newOrder,
  updateOrder,
  deleteOrder,
};
