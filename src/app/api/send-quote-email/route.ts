
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { SITE_CONFIG } from '@/lib/config';
import type { QuoteData } from '@/lib/email';


/**
 * Sends an email using Nodemailer with SMTP credentials from environment variables.
 */
async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string; }) {
  const transporter = nodemailer.createTransport({
    host: "mail.moemoeenterprise.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });

  try {
    const info = await transporter.sendMail({
      from: `"${SITE_CONFIG.name}" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });
    console.log("Message sent successfully: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email.");
  }
}

/**
 * Generates and sends a confirmation email to the customer after a quote request.
 */
async function sendCustomerQuoteConfirmationEmail(data: QuoteData) {
  const subject = `Your Quote Request from ${SITE_CONFIG.name}`;
  const html = `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #ffffff; padding: 20px; text-align: center; border-bottom: 1px solid #e0e0e0;">
     <img src="https://i.imgur.com/kpvUUgj.png" alt="${SITE_CONFIG.name} Logo" style="max-width: 150px; margin: 0 auto;">
  </div>
  <div style="padding: 20px;">
    <h1 style="color: #041F66; font-size: 24px; margin-top: 0;">Thank You, ${data.name.split(' ')[0]}!</h1>
    <p>We have received your request for a quote. One of our Customer Support team will reach out shortly to assist with actioning your request. Here is a summary of your request:</p>
    <ul style="list-style: none; padding: 0; margin: 20px 0; background-color: #f9f9f9; border-radius: 5px; padding: 15px;">
      <li style="padding: 5px 0;"><strong>Service Type:</strong> ${data.serviceType}</li>
      <li style="padding: 5px 0;"><strong>Address:</strong> ${data.address}</li>
      <li style="padding: 5px 0;"><strong>Details:</strong> ${data.details}</li>
    </ul>
    <p>If you have any immediate questions, feel free to contact us at <a href="mailto:${SITE_CONFIG.email}" style="color: #041F66;">${SITE_CONFIG.email}</a> or call us at ${SITE_CONFIG.phone}.</p>
    <p style="margin-top: 20px;">Best regards,<br/>The ${SITE_CONFIG.name} Team</p>
  </div>
  <div style="background-color: #041F66; color: #ffffff; text-align: center; padding: 15px; font-size: 12px;">
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
async function sendAdminQuoteNotificationEmail(data: QuoteData) {
  const subject = `New Quote Request from ${data.name}`;
  const html = `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">
  <div style="background-color: #48BFE3; color: #041F66; padding: 20px;">
    <h1 style="margin: 0; font-size: 24px;">New Quote Request Received</h1>
  </div>
  <div style="padding: 20px;">
    <p>A new quote request has been submitted through the website. Please review the details below and follow up with the client.</p>
    <h2 style="border-bottom: 2px solid #eee; padding-bottom: 5px; margin-top: 25px; margin-bottom: 15px;">Client Information</h2>
    <ul style="list-style: none; padding: 0;">
      <li style="padding: 5px 0;"><strong>Full Name:</strong> ${data.name}</li>
      <li style="padding: 5px 0;"><strong>Email Address:</strong> <a href="mailto:${data.email}" style="color: #041F66;">${data.email}</a></li>
      <li style="padding: 5px 0;"><strong>Phone Number:</strong> <a href="tel:${data.phone}" style="color: #041F66;">${data.phone}</a></li>
    </ul>
    <h2 style="border-bottom: 2px solid #eee; padding-bottom: 5px; margin-top: 25px; margin-bottom: 15px;">Service Details</h2>
    <ul style="list-style: none; padding: 0;">
      <li style="padding: 5px 0;"><strong>Service Requested:</strong> ${data.serviceType}</li>
      <li style="padding: 5px 0;"><strong>Service Address:</strong> ${data.address}</li>
      <li style="padding: 5px 0;"><strong>Message/Details:</strong></li>
      <li style="padding: 5px 0; background-color: #f9f9f9; border: 1px solid #eee; border-radius: 4px; padding: 10px;">${data.details}</li>
    </ul>
  </div>
   <div style="background-color: #f3f4f6; text-align: center; padding: 15px; font-size: 12px; color: #666;">
    <p>This is an automated notification from ${SITE_CONFIG.name}.</p>
  </div>
</div>`;

  const adminEmail = 'info@moemoeenterprise.com';

  return sendEmail({
    to: adminEmail,
    subject,
    html,
  });
}


export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

  try {
    const quoteData: QuoteData = await req.json();
    
    // Server-side validation just in case
    if (!quoteData.name || !quoteData.email || !quoteData.serviceType) {
        return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    await Promise.all([
      sendCustomerQuoteConfirmationEmail(quoteData),
      sendAdminQuoteNotificationEmail(quoteData)
    ]);

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    const errorMessage = error instanceof Error ? error.message : "An unknown server error occurred";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
