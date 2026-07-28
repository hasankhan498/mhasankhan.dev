"use server"

import prisma from "@/lib/prisma"

export async function sendMessage(formData:FormData) {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    await prisma.contactMessage.create({
        data:{
            name,
            email,
            subject,
            message
        }
    })
    return;
}