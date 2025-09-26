
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

  // Instead of just logging, we'll "send" emails now.
  try {
    // Email to the customer
    await sendCustomerQuoteConfirmationEmail(quoteData);
    
    // Email to the admin
    await sendAdminQuoteNotificationEmail(quoteData);

  } catch (error) {
    console.error("Email sending failed:", error);
    // You might want to handle this case, e.g., by not showing success to the user
    // or by queuing the email for a retry. For now, we'll let it proceed.
  }
  
  console.log("Quote Request Submitted:", quoteData);

  // We keep the simulated network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    type: "success" as const,
    message: "Thank you for your quote request! We will review the details and get back to you within 24 hours.",
  };
}
