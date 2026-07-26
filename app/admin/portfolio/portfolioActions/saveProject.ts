"use server"

import { uploadImage } from "@/actions/UploadImage"
import prisma from "@/lib/prisma"

export async function saveProject(formData:FormData) {
    const title = formData.get("title") as string
    const link = formData.get("link") as string
    const category = formData.get("category") as string

    const setImage = await uploadImage(formData,"portfolio/projects")
    if(!setImage) return;

    await prisma.project.create({
        data:{
            title,
            imageUrl:setImage.url,
            link,
            category,
            imagePublicId:setImage.publicId
        }
    })
}