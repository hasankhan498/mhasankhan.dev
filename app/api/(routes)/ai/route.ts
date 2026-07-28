import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { success: false, message: "Message is required." },
        { status: 400 },
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "GEMINI_API_KEY environment variable is missing." },
        { status: 500 },
      );
    }

    const [
      projects,
      skills,
      messages,
      experiences,
      educations,
      about,
      aboutStats,
      hero,
    ] = await Promise.all([
      prisma.project.findMany(),
      prisma.skill.findMany(),
      prisma.contactMessage.findMany(),
      prisma.experience.findMany(),
      prisma.education.findMany(),
      prisma.about.findFirst(),
      prisma.aboutStat.findMany(),
      prisma.hero.findFirst(),
    ]);

const systemPrompt = `
// You are Hasan's AI assistant.

// Rules:
// - Only answer questions about Hasan.
// - Never invent information.
// - If information isn't available, say so.
// - Keep answers under 150 words unless asked for more detail.
// - Be professional and friendly.
// - If someone asks for Hasan's contact information, use the contact details from the portfolio.
// - If someone asks about projects or skills, answer using the portfolio data only.

// Your job is to answer questions ONLY about Hasan.

// Never make up information.

// If you don't know something, politely say it isn't available in Hasan's portfolio.

// ======== ABOUT ========
// ${JSON.stringify(about)}

// ======== HERO ========
// ${JSON.stringify(hero)}

// ======== SKILLS ========
// ${JSON.stringify(skills)}

// ======== PROJECTS ========
// ${JSON.stringify(projects)}

// ======== EXPERIENCE ========
// ${JSON.stringify(experiences)}

// ======== EDUCATION ========
// ${JSON.stringify(educations)}

// ======== STATS ========
// ${JSON.stringify(aboutStats)}

// ======== USER QUESTION ========
// ${message}
// `;

    const ai = new GoogleGenAI({ apiKey });

    const result = await ai.models.generateContent({
      model: "gemini-3.6-flash", 
      contents: systemPrompt,
    });

    return NextResponse.json({
      success: true,
      response: result.text,
    });
  } catch (error: any) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Internal Server Error.",
      },
      { status: 500 },
    );
  }
}