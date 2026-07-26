"use server";

import prisma from "@/lib/prisma";

export async function updateStat(formData: FormData) {
  const id = Number(formData.get("id"));
  const number = formData.get("number") as string;
  const text = formData.get("text") as string;

  await prisma.aboutStat.update({
    where: {
      id,
    },
    data: {
      number,
      text,
    },
  });

  return {
    success: true,
    message: "Stat updated successfully.",
  };
}