"use server";

import prisma from "@/lib/prisma";

export async function deleteEducation(formData: FormData) {
  const id = Number(formData.get("id"));

  if (!id) {
    return {
      success: false,
      message: "Invalid education id.",
    };
  }

  await prisma.education.delete({
    where: {
      id,
    },
  });

  return {
    success: true,
    message: "education deleted successfully.",
  };
}