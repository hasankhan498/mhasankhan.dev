
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with M Hasan Khan for freelance work, full-time opportunities, collaborations, or custom web development projects.",
};

const page = () => {

  return (
    <ContactClient />
  )
}

export default page