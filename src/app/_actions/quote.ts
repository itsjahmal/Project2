
"use server";

import { z } from "zod";
import type { QuoteData } from "@/lib/email";

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  serviceType: z.enum(["Moving", "Cleaning"], {
    errorMap: () => ({ message: "Please select a service type." }),
  }),
  address: z.string().min(10, "Please enter a valid address."),
  details: z.string().min(10, "Please provide some details about your needs."),
});

export async function submitQuoteForm(prevState: any, formData: FormData) {
  console.log("Submit quote form action initiated.");

  const validatedFields = quoteSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    serviceType: formData.get("serviceType"),
    address: formData.get("address"),
    details: formData.get("details"),
  });

  if (!validatedFields.success) {
    console.log("Validation failed:", validatedFields.error.flatten().fieldErrors);
    return {
      type: "error" as const,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors in the form.",
    };
  }

  const quoteData: QuoteData = validatedFields.data;
  console.log("Validation successful. Quote data:", quoteData);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/send-quote-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
    });

    if (!response.ok) {
        const res = await response.json();
        console.error("API Error:", res.message);
        throw new Error(res.message || "Failed to send email from API route.");
    }
    
    console.log("Emails sent successfully via API route.");

    return {
      type: "success" as const,
      message: "Thank you for your request! A member of our team will be in touch with you shortly.",
    };

  } catch (error) {
    console.error("Email sending process failed:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return {
        type: "error" as const,
        errors: null,
        message: `There was a problem submitting your request. Please try again later. Error: ${errorMessage}`
    }
  }
}
