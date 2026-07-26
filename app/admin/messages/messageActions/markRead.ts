"use server"

import prisma from "@/lib/prisma"

export async function markRead(formData:FormData) {
    const id = Number(formData.get("id")) as number

    if(!id) return;

    await prisma.contactMessage.update({
        where:{
            id,
        },
        data:{
            isRead:true
        }
    }) 
}