import { User } from '@prisma/client';
import prisma from '../utils/prismaClient';

const findUserById = async (id: string) => {
  return await prisma.user.findUnique({ where: { id } });
};

const findUserByEmail = async (email: string) => {
  return prisma.user.findFirst({ where: { email } });
};

const findAllUsers = async () => {
  return await prisma.user.findMany();
};

const createNewUser = async (user: any) => {
  return await prisma.user.create({
    data: user,
  });
};

const userServices = {
  findAllUsers,
  findUserById,
  createNewUser,
  findUserByEmail,
};

export default userServices;
