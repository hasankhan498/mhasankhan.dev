"use server"

import prisma from "@/lib/prisma"

export async function getExper() {
    const exper = await prisma.experience.findMany({
        orderBy:{
            id:"desc"
        },
    })
    return exper
}