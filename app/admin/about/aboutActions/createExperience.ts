"use server";

import prisma from "@/lib/prisma";

export async function createExperience(formData: FormData) {
  const title = formData.get("title") as string;
  const company = formData.get("company") as string;
  const duration = formData.get("duration") as string;
  const description = formData.get("description") as string;

  await prisma.experience.create({
    data: {
      title,
      company,
      duration,
      description
    },
  });

  // return {
  //   success: true,
  //   message: "Entity Created successfully.",
  // };
}