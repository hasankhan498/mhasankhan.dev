"use server";

import prisma from "@/lib/prisma";

export async function deleteMessage(formData: FormData) {
  const id = Number(formData.get("id"));

  if (!id) {
    await prisma.contactMessage.delete({
      where: {
        id,
      },
    });
  }
}
