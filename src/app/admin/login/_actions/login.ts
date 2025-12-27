
"use server";

import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(1, "Password is required."),
});

export async function loginAction(prevState: any, formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      type: "error" as const,
      message: "Invalid email or password format.",
    };
  }

  const { email, password } = validatedFields.data;

  try {
    // The next.config.js rewrite will proxy this to https://api.moemoeenterprise.com/auth/login
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Invalid credentials.");
    }
    
    // On success, the API should return a token.
    // In a real app, you would set this token in an HttpOnly cookie for session management.
    // For now, we'll just simulate success and redirect.
    console.log("API Login Success:", result);

    return {
      type: "success" as const,
      message: "Login successful! Redirecting...",
    };

  } catch (error: any) {
    console.error("Login API Error:", error);
    return {
      type: "error" as const,
      message: error.message || "An unexpected error occurred. Please try again.",
    };
  }
}
