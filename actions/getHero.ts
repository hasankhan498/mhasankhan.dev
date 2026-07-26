"use server";

import prisma from "@/lib/prisma";

export async function getHeroData() {
  const heroData = await prisma.hero.findFirst({
    where: {
      id: 1,
    },
  });
  return heroData;
}