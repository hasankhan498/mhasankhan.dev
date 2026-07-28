"use server";

import prisma from "@/lib/prisma";

export async function deleteEducation(formData: FormData) {
  const id = Number(formData.get("id"));

  if (id) {
    await prisma.education.delete({
      where: {
        id,
      },
    });
  }
}
