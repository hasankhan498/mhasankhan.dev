"use server"

import prisma from "@/lib/prisma"

export async function putArchive(formData:FormData) {
    const id = Number(formData.get("id")) as number

    if(!id) return;

    await prisma.contactMessage.update({
        where:{
            id,
        },
        data:{
            isArchived:true
        }
    }) 
}