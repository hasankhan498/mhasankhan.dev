"use server";

import prisma from "@/lib/prisma";

export async function deleteStat(formData: FormData) {
  const id = Number(formData.get("id"));

  await prisma.aboutStat.delete({
    where: {
      id,
    },
  });

  return {
    success: true,
    message: "Stat deleted successfully.",
  };
}