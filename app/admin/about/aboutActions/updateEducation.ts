"use server";

import prisma from "@/lib/prisma";

export async function updateEducation(formData: FormData) {
    
  const id = Number(formData.get("id"));
  const degree = formData.get("degree") as string;
  const institute = formData.get("institute") as string;
  const duration = formData.get("duration") as string;
  const description = formData.get("description") as string;

  await prisma.education.update({
    where: { id },
    data: { degree, institute, duration, description },
  });

}