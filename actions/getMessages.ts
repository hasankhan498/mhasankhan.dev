"use server";

import prisma from "@/lib/prisma";

export async function getMessages(page: number) {
  const limit = 5;

  const messages = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  const totalMessages = await prisma.contactMessage.count();

  return {
    messages,
    totalPages: Math.ceil(totalMessages / limit),
  };
}