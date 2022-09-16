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

const updatingUser = async (email: string, data: any) => {
  const updateUser = await prisma.user.update({
    where: { email },
    data: data,
  });
  return updateUser;
};

const deletingUser = async (id: string) => {
  const deletedUser = await prisma.user.delete({
    where: { id },
  });
  return deletedUser;
};

const userServices = {
  updatingUser,
  deletingUser,
  findAllUsers,
  findUserById,
  createNewUser,
  findUserByEmail,
};

export default userServices;
