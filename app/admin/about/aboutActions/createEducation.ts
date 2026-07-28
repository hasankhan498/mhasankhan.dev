"use server";

import prisma from "@/lib/prisma";

export async function createEducation(formData: FormData) {
  const degree = formData.get("degree") as string;
  const institute = formData.get("institute") as string;
  const duration = formData.get("duration") as string;
  const description = formData.get("description") as string;

  await prisma.education.create({
    data: {
      degree,
      institute,
      duration,
      description
    },
  });

  // return {
  //   success: true,
  //   message: "Entity Created successfully.",
  // };
}