
import type { Metadata } from "next";
import AiClient from "./AiClient";

export const metadata: Metadata = {
  title: "AI Portfolio Assistant",
  description:
    "Chat with M Hasan Khan's AI Portfolio Assistant to explore projects, technical skills, work experience, services, and web development expertise through an intelligent conversational interface.",
};


const page = () => {

    return (
        <AiClient />
    )
}

export default page