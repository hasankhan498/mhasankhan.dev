"use server";

import prisma from "@/lib/prisma";

export async function deleteSkill(formData: FormData) {
  const id = Number(formData.get("id"));

  if (!id) {
    return {
      success: false,
      message: "Invalid skill id.",
    };
  }

  await prisma.skill.delete({
    where: {
      id,
    },
  });

  return {
    success: true,
    message: "Skill deleted successfully.",
  };
}