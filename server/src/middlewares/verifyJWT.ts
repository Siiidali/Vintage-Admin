import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader =
    (req.headers.authorization as string) ||
    (req.headers.Authorization as string);

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET as string,
    (err: any, decoded: any) => {
      if (err) return res.status(403).json({ message: 'Forbidden' });
      next();
    }
  );
};
