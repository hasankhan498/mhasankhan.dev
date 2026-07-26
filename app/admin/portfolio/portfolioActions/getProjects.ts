"use server"

import prisma from "@/lib/prisma"

export async function getProject() {
    const proj = await prisma.project.findMany({
        orderBy:{
            id:"desc"
        },
    })
    return proj
}