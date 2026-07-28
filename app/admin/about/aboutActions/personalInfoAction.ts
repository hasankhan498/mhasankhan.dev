"use server";

import prisma from "@/lib/prisma";

export const savePersonalInfo = async(formData: FormData) => {
  const name = formData.get("name") as string;
  const age = formData.get("age") as string;
  const nationality = formData.get("nationality") as string;
  const freelance = formData.get("freelance") as string;
  const address = formData.get("address") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const languages = formData.get("languages") as string;
  const heading = "Who I Am"

  await prisma.about.upsert({
    where: {
        id:1
    },
    update:{
        name,
        age,
        nationality,
        address,
        languages,
        email,
        phone,
        freelance,
        heading
    },
    create:{
        name,
        age,
        nationality,
        address,
        languages,
        email,
        phone,
        freelance,
        heading
    }
  })

};
