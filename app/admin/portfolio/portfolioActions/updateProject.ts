"use server";

import { deleteImage } from "@/actions/DeleteImage";
import { uploadImage } from "@/actions/UploadImage";
import prisma from "@/lib/prisma";


export async function updateProject(formData: FormData) {
    const id = Number(formData.get("id"))  as number
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;
  const link = formData.get("link") as string;

  const existingProject = await prisma.project.findUnique({
    where: {
      id,
    },
  });

  const image = await uploadImage(formData, "portfolio/hero");

  await prisma.project.update({
    where: {
      id
    },

    data: {
      title,
      link,
      category,
      ...(image && {
        imageUrl: image.url,
        imagePublicId: image.publicId,
      }),
    },
  });

  if (image && existingProject?.imagePublicId) {
    await deleteImage(existingProject.imagePublicId);
  }

  return;
}
