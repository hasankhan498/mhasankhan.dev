"use server"

import prisma from "@/lib/prisma"

export async function getStats() {
    const stats = await prisma.aboutStat.findMany()
    return stats
}