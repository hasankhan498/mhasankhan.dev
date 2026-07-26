"use server";

import prisma from "@/lib/prisma";

export async function updateExperience(formData: FormData) {
    
  const id = Number(formData.get("id"));
  const title = formData.get("title") as string;
  const company = formData.get("company") as string;
  const duration = formData.get("duration") as string;
  const description = formData.get("description") as string;

  await prisma.experience.update({
    where: { id },
    data: { title, company, duration, description },
  });

}