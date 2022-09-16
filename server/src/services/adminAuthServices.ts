import prisma from '../utils/prismaClient';

const findAdminByEmail = async (email: string) => {
  return prisma.admin.findFirst({ where: { email } });
};

const adminAuthServices = {
  findAdminByEmail,
};

export default adminAuthServices;
