import prisma from "@/lib/prisma";

export const createStarId = (id: string) => {
  return prisma.starSign.findUnique({
    where: {
      id: parseInt(id),
    },
  });
};
