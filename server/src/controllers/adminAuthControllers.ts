import { Request, Response } from 'express';
import { loginInput } from '../schemas/authScheme';
import adminAuthServices from '../services/adminAuthServices';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// @desc Login
// @route POST /auth
// @access Public
const login = async (req: Request<{}, {}, loginInput>, res: Response) => {
  const { email, password } = req.body;
  try {
    const foundAdmin = await adminAuthServices.findAdminByEmail(email);

    // check if the user is founded and he's active
    if (!foundAdmin) {
      return res.status(401).json({ message: 'Admin not found' });
    }

    const match = await bcrypt.compare(password, foundAdmin.password);

    if (!match) return res.status(401).json({ message: 'Incorrect Password' });

    const accessToken = jwt.sign(
      {
        UserInfo: {
          email: foundAdmin.email,
        },
      },
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: '1m' }
    );

    const refreshToken = jwt.sign(
      { email: foundAdmin.email },
      process.env.REFRESH_TOKEN_SECRET as string,
      { expiresIn: '1d' }
    );

    // Create secure cookie with refresh token
    res.cookie('jwtAdmin', refreshToken, {
      httpOnly: true, //accessible only by web server
      secure: true, //https
      sameSite: 'none', //cross-site cookie
      maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry
    });

    // Send accessToken containing username and roles
    res.json({ accessToken });
  } catch (e: any) {
    return res.status(400).json({ error: e.message });
  }
};

// @desc Refresh
// @route GET /auth/refresh
// @access Public - because access token has expired
const refresh = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  try {
    if (!cookies?.jwtAdmin)
      return res.status(401).json({ message: 'You are not logged in' });

    const refreshToken = cookies.jwtAdmin;

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET as string,
      async (err: any, decoded: any) => {
        if (err) return res.status(403).json({ message: 'Forbidden' });

        const foundAdmin = await adminAuthServices.findAdminByEmail(
          decoded.email
        );

        if (!foundAdmin)
          return res.status(401).json({ message: 'Unauthorized' });

        const accessToken = jwt.sign(
          {
            UserInfo: {
              email: foundAdmin.email,
            },
          },
          process.env.ACCESS_TOKEN_SECRET as string,
          { expiresIn: '1m' }
        );

        res.json({ accessToken });
      }
    );
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const logout = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  if (!cookies?.jwtAdmin) return res.sendStatus(204); //No content
  res.clearCookie('jwtAdmin', {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });
  res.json({ message: 'Cookie cleared' });
};

export const adminAuthControllers = {
  login,
  refresh,
  logout,
};
