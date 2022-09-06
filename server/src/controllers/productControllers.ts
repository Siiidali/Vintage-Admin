import { Request, Response } from 'express';

const getProduct = (req: Request, res: Response) => {};

const getProducts = (req: Request, res: Response) => {};

const createProduct = (req: Request, res: Response) => {};

const updateProduct = (req: Request, res: Response) => {};

const deleteProduct = (req: Request, res: Response) => {};

export const productControllers = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
