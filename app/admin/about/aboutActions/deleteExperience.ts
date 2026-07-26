"use server";

import prisma from "@/lib/prisma";

export async function deleteExperience(formData: FormData) {
  const id = Number(formData.get("id"));

  if (!id) {
    return {
      success: false,
      message: "Invalid experience id.",
    };
  }

  await prisma.experience.delete({
    where: {
      id,
    },
  });

  return {
    success: true,
    message: "experience deleted successfully.",
  };
}