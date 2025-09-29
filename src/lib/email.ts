
"use server";

import { SITE_CONFIG } from './config';
import nodemailer from 'nodemailer';

export type QuoteData = {
  name: string;
  email: string;
  phone: string;
  serviceType: 'Moving' | 'Cleaning';
  address: string;
  details: string;
};

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

/**
 * Sends an email using Nodemailer and SMTP credentials.
 */
async function sendEmail({ to, subject, html }: EmailOptions) {
  const from = `${SITE_CONFIG.name} <${process.env.EMAIL_USERNAME}>`;

  // These details are for your real SMTP server.
  // They are securely read from environment variables.
  const transporter = nodemailer.createTransport({
    host: "mail.moemoeenterprise.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME, // Your noreply@moemoeenterprise.com email
      pass: process.env.EMAIL_PASSWORD, // The password for that email account
    },
  });

  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });

    console.log("Message sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };

  } catch (error) {
    console.error("Error sending email:", error);
    // In a real app, you'd want more robust error handling here.
    // For now, we'll throw the error so we can see it in the server logs.
    throw new Error("Failed to send email.");
  }
}

/**
 * Generates and sends a confirmation email to the customer after a quote request.
 */
export async function sendCustomerQuoteConfirmationEmail(data: QuoteData) {
  const subject = `Your Quote Request from ${SITE_CONFIG.name}`;
  const html = `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #041F66; color: #ffffff; padding: 20px; text-align: center;">
     <img src="https://i.imgur.com/kpvUUgj.png" alt="${SITE_CONFIG.name} Logo" style="max-width: 150px; margin-bottom: 10px;">
    <h1 style="margin: 0; font-size: 24px;">Thank You, ${data.name.split(' ')[0]}!</h1>
  </div>
  <div style="padding: 20px;">
    <p>We have received your request for a quote and will get back to you shortly. Here are the details you submitted:</p>
    <ul style="list-style: none; padding: 0; margin: 20px 0; background-color: #f9f9f9; border-radius: 5px; padding: 15px;">
      <li style="padding: 5px 0;"><strong>Service Type:</strong> ${data.serviceType}</li>
      <li style="padding: 5px 0;"><strong>Address:</strong> ${data.address}</li>
      <li style="padding: 5px 0;"><strong>Details:</strong> ${data.details}</li>
    </ul>
    <p>If you have any immediate questions, feel free to contact us at <a href="mailto:${SITE_CONFIG.email}" style="color: #041F66;">${SITE_CONFIG.email}</a> or call us at ${SITE_CONFIG.phone}.</p>
    <p style="margin-top: 20px;">Best regards,<br/>The ${SITE_CONFIG.name} Team</p>
  </div>
  <div style="background-color: #f3f4f6; text-align: center; padding: 15px; font-size: 12px; color: #666;">
    <p>${SITE_CONFIG.copyright}</p>
  </div>
</div>`;

  return sendEmail({
    to: data.email,
    subject,
    html,
  });
}

/**
 * Generates and sends a notification email to the admin with new quote details.
 */
export async function sendAdminQuoteNotificationEmail(data: QuoteData) {
  const subject = `New Quote Request - ${data.serviceType} for ${data.name}`;
  const html = `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">
  <div style="background-color: #48BFE3; color: #041F66; padding: 20px;">
    <h1 style="margin: 0; font-size: 24px;">New Quote Request Received</h1>
  </div>
  <div style="padding: 20px;">
    <p>A new quote request has been submitted through the website. Please review the details below and follow up with the client.</p>
    <h2 style="border-bottom: 2px solid #eee; padding-bottom: 5px; margin-top: 25px; margin-bottom: 15px;">Client Information</h2>
    <ul style="list-style: none; padding: 0;">
      <li style="padding: 5px 0;"><strong>Name:</strong> ${data.name}</li>
      <li style="padding: 5px 0;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #041F66;">${data.email}</a></li>
      <li style="padding: 5px 0;"><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #041F66;">${data.phone}</a></li>
    </ul>
    <h2 style="border-bottom: 2px solid #eee; padding-bottom: 5px; margin-top: 25px; margin-bottom: 15px;">Service Details</h2>
    <ul style="list-style: none; padding: 0;">
      <li style="padding: 5px 0;"><strong>Service Type:</strong> ${data.serviceType}</li>
      <li style="padding: 5px 0;"><strong>Service Address:</strong> ${data.address}</li>
      <li style="padding: 5px 0;"><strong>Project Details:</strong></li>
      <li style="padding: 5px 0; background-color: #f9f9f9; border: 1px solid #eee; border-radius: 4px; padding: 10px;">${data.details}</li>
    </ul>
  </div>
   <div style="background-color: #f3f4f6; text-align: center; padding: 15px; font-size: 12px; color: #666;">
    <p>This is an automated notification from ${SITE_CONFIG.name}.</p>
  </div>
</div>`;

  return sendEmail({
    to: `info@moemoeenterprise.com`, // Your admin email
    subject,
    html,
  });
}
