import { Request, Response } from 'express';

const getUser = (req: Request, res: Response) => {};

const getUsers = (req: Request, res: Response) => {};

const createUser = (req: Request, res: Response) => {};

const updateUser = (req: Request, res: Response) => {};

const deleteUser = (req: Request, res: Response) => {};

export const userControllers = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
