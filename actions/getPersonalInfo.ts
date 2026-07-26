"use server";

import prisma from "@/lib/prisma";

export async function getPersonalInfo() {
  const infoData = await prisma.about.findFirst({
    where: {
      id: 1,
    },
  });
  return infoData;
}