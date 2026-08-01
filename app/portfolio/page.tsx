import type { Metadata } from "next";
import PortfolioClient from "./portfolioClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse the portfolio of M Hasan Khan featuring full-stack web applications, admin dashboards, landing pages, UI designs, and real-world development projects.",
};

const page = () => {

  
  return (
    <PortfolioClient />
  )
}

export default page