"use server";

import prisma from "@/lib/prisma";

export async function deleteProject(formData: FormData) {
  const id = Number(formData.get("id"));

  if (!id) return;

  await prisma.project.delete({
    where: {
      id,
    },
  });

  return;
}