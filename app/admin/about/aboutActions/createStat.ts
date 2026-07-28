"use server";

import prisma from "@/lib/prisma";

export async function createStat(formData: FormData) {
  const number = formData.get("number") as string;
  const text = formData.get("text") as string;

  await prisma.aboutStat.create({
    data: {
      number,
      text,
    },
  });

  // return {
  //   success: true,
  //   message: "Stat Created successfully.",
  // };
}