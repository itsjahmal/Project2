
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
  const validatedFields = quoteSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    serviceType: formData.get("serviceType"),
    address: formData.get("address"),
    details: formData.get("details"),
  });

  if (!validatedFields.success) {
    return {
      type: "error" as const,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const quoteData = validatedFields.data;

  try {
    // "Send" the confirmation email to the customer
    await sendCustomerQuoteConfirmationEmail(quoteData);
    
    // "Send" the notification email to the admin
    await sendAdminQuoteNotificationEmail(quoteData);

  } catch (error) {
    console.error("Email sending simulation failed:", error);
    // Return a generic error if the email simulation fails
    return {
        type: "error" as const,
        message: "There was an issue processing the quote request. Please try again."
    }
  }
  
  console.log("Quote Request Submitted and Emails Sent:", quoteData);

  return {
    type: "success" as const,
    message: "Thank you for your quote request! We will review the details and get back to you within 24 hours.",
  };
}
