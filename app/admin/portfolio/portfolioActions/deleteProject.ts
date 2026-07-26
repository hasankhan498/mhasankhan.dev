"use server";

import prisma from "@/lib/prisma";

export async function deleteProject(formData: FormData) {
  const id = Number(formData.get("id"));

  if (!id) {
    return {
      success: false,
      message: "Invalid project id.",
    };
  }

  await prisma.project.delete({
    where: {
      id,
    },
  });

  return {
    success: true,
    message: "project deleted successfully.",
  };
}