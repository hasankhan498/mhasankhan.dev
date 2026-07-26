"use server";

import prisma from "@/lib/prisma";

export async function deleteMessage(formData: FormData) {
  const id = Number(formData.get("id"));

  if (!id) {
    return {
      success: false,
      message: "Invalid Message id.",
    };
  }

  await prisma.contactMessage.delete({
    where: {
      id,
    },
  });

  return {
    success: true,
    message: "message deleted successfully.",
  };
}