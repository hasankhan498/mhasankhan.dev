"use server";

import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";

export async function logIn(
  prevState: any,
  formData: FormData
) {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/admin/dashboard",
    });

    return { 
      success: true,
      message:"Logged In successfully"
     };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { success:false, message: "Invalid email or password." };

        default:
          return { success:false, message: "Something went wrong." };
      }
    }

    throw error;
  }
}