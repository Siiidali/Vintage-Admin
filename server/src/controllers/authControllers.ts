import { Request, Response } from 'express';

const login = (req: Request, res: Response) => {};

const refresh = (req: Request, res: Response) => {};

const logout = (req: Request, res: Response) => {};

export const authControllers = {
  login,
  refresh,
  logout,
};
