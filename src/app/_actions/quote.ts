
"use server";

import { z } from "zod";
import { sendCustomerQuoteConfirmationEmail, sendAdminQuoteNotificationEmail } from "@/lib/email";

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

  const quoteData = validatedFields.data;
  console.log("Validation successful. Quote data:", quoteData);

  try {
    console.log("Attempting to send emails...");
    // Send emails in parallel
    await Promise.all([
      sendCustomerQuoteConfirmationEmail(quoteData),
      sendAdminQuoteNotificationEmail(quoteData)
    ]);
    console.log("Emails sent successfully.");

    return {
      type: "success" as const,
      message: "Thank you for your request! A member of our team will be in touch with you shortly.",
    };

  } catch (error) {
    console.error("Email sending process failed:", error);
    return {
        type: "error" as const,
        errors: null,
        message: "There was a problem submitting your request. Please try again later."
    }
  }
}
