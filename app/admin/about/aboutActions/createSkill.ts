"use server";

import prisma from "@/lib/prisma";

export async function createSkill(prevState:any , formData: FormData) {
  const name = formData.get("name") as string;
  const percentage = Number(formData.get("percentage")) as number;

  await prisma.skill.create({
    data: {
      name,
      percentage
    },
  });

  return {
    success: true,
    message: "Skill Created successfully.",
  };
}