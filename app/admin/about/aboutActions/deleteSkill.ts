"use server";

import prisma from "@/lib/prisma";

export async function deleteSkill(formData: FormData) {
  const id = Number(formData.get("id"));

  if (!id) return

  await prisma.skill.delete({
    where: {
      id,
    },
  });

  return;
}