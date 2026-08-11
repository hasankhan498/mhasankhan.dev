import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
const baseUrl = "https://mhasankhandev.vercel.app";

return {
rules: {
userAgent: "*",
allow: "/",
disallow: [
"/admin",
"/admin/",
"/login",
"/login/",
"/signup",
"/signup/",
],
},
sitemap: `${baseUrl}/sitemap.xml`,
};
}
