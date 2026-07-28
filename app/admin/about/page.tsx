import { redirect } from "next/navigation";


const AboutIndexPage = () => {
  redirect("/admin/about/personal-info");
};

export default AboutIndexPage;