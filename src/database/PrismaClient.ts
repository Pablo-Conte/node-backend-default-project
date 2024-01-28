import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.PRISMA_LOCAL,
    },
  },
});

export { prisma };
