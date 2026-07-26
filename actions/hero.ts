"use server";

import prisma from "@/lib/prisma";
import { uploadImage } from "./UploadImage";
import { deleteImage } from "./DeleteImage";

export async function saveHero(formData: FormData) {
  const name = formData.get("name") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const buttonText = formData.get("buttonText") as string;
  const buttonLink = formData.get("buttonLink") as string;

  const existingHero = await prisma.hero.findUnique({
    where: {
      id: 1,
    },
  });

  const image = await uploadImage(formData, "portfolio/hero");

  if (!existingHero && !image) {
    throw new Error("Hero image is required.");
  }

  await prisma.hero.upsert({
    where: {
      id: 1,
    },

    update: {
      name,
      title,
      description,
      buttonText,
      buttonLink,

      ...(image && {
        imageUrl: image.url,
        imagePublicId: image.publicId,
      }),
    },

    create: {
      id: 1,
      name,
      title,
      description,
      buttonText,
      buttonLink,
      imageUrl: image!.url,
      imagePublicId: image!.publicId,
    },
  });

  if (image && existingHero?.imagePublicId) {
    await deleteImage(existingHero.imagePublicId);
  }

  return {
    success: true,
    message: "Hero updated successfully.",
  };
}
