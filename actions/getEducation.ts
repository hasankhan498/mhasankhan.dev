"use server"

import prisma from "@/lib/prisma"

export async function getEducate() {
    const educ = await prisma.education.findMany({
        orderBy:{
            id:"desc"
        },
    })
    return educ
}