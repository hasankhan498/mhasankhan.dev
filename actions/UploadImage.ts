"use server";

import cloudinary from "@/lib/cloudinary";
import { UploadApiResponse } from "cloudinary";

export async function uploadImage(formData: FormData, folder: string) {
  const file = formData.get("image") as File | null;

  // Don't attempt to upload if no file or an empty file was passed
  if (!file || !(file instanceof File) || file.size === 0) {
    return null;
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  try {
    const result = await new Promise<UploadApiResponse>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder },
        (error, result) => {
          if (error) {
            console.error("Cloudinary Upload Error Details:", error);
            return reject(new Error(error.message || "Failed to upload image to Cloudinary"));
          }
          if (!result) {
            return reject(new Error("No result returned from Cloudinary"));
          }
          resolve(result);
        }
      );
      stream.end(buffer);
    });

    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.error("uploadImage helper exception:", error);
    throw error;
  }
}