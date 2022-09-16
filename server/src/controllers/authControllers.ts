import { Request, Response } from 'express';
import { loginInput } from '../schemas/authScheme';

// @desc Login
// @route POST /auth
// @access Public
const login = async (req: Request<{}, {}, loginInput>, res: Response) => {
  const { email, password } = req.body;
};

// @desc Refresh
// @route GET /auth/refresh
// @access Public - because access token has expired
const refresh = async (req: Request, res: Response) => {};

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const logout = async (req: Request, res: Response) => {};

export const authControllers = {
  login,
  refresh,
  logout,
};
