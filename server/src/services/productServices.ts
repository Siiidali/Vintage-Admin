import { Product } from '@prisma/client';
import prisma from '../utils/prismaClient';

const findProductById = async (id: string) => {
  return await prisma.product.findUnique({ where: { id } });
};

const findAllProducts = async () => {
  return await prisma.product.findMany();
};

const creatingProduct = async (product: Product) => {
  return await prisma.product.create({
    data: product,
  });
};

const updatingProduct = async (id: string, product: any) => {
  const updateProduct = await prisma.product.update({
    where: { id },
    data: product,
  });
  return updateProduct;
};

const deletingProduct = async (id: string) => {
  const deletedProduct = await prisma.product.delete({
    where: { id },
  });
  return deletedProduct;
};

const productServices = {
  findAllProducts,
  updatingProduct,
  findProductById,
  creatingProduct,
  deletingProduct,
};
export default productServices;
