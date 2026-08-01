
import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about M Hasan Khan, a Full Stack Web Developer passionate about building scalable, responsive, and high-performance web applications using modern technologies.",
};

const page = () => {

  return (
    <AboutClient />
  )
}

export default page