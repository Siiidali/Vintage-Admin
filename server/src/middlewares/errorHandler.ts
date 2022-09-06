import { Request, Response } from 'express';
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: any
) => {
  console.log(err.message);
  const status = res.statusCode ? res.statusCode : 500; // server error
  res.status(status);
  res.json({ message: err.message });
};
