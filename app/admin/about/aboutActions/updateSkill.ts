"use server";

import prisma from "@/lib/prisma";

export async function updateSkill(formData: FormData) {
  const id = Number(formData.get("id"));
  const name = formData.get("name") as string;
  const percentage = Number(formData.get("percentage")) as number;

  await prisma.skill.update({
    where: {
      id,
    },
    data: {
      name,
      percentage
    },
  });

}