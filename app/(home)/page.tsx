
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to the portfolio of M Hasan Khan. Explore modern full-stack web applications built with Next.js, React, Laravel, TypeScript, Prisma, PostgreSQL, and Tailwind CSS.",
};

export default function Home() {


  return (
    <HomeClient />
  );
}