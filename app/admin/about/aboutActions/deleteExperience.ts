"use server";

import prisma from "@/lib/prisma";

export async function deleteExperience(formData: FormData) {
  const id = Number(formData.get("id"));

  if (id) {
    await prisma.experience.delete({
      where: {
        id,
      },
    });
  }
}
