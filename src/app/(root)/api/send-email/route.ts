import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    serviceType,
    preferredDate,
    preferredTime,
    additionalDetails,
  } = body;

  try {
    // Create transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to admin (you)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mugishajoseph092@gmail.com', // Admin's email address
      subject: `New Service Booking Request from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #007BFF; color: #ffffff; padding: 16px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Service Booking Request</h1>
          </div>
          <div style="padding: 16px; line-height: 1.6;">
            <p style="font-size: 16px;">You have received a new service booking request. Below are the details:</p>
            <ul style="list-style-type: none; padding: 0;">
              <li style="margin-bottom: 8px;"><strong>First Name:</strong> ${firstName}</li>
              <li style="margin-bottom: 8px;"><strong>Last Name:</strong> ${lastName}</li>
              <li style="margin-bottom: 8px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007BFF;">${email}</a></li>
              <li style="margin-bottom: 8px;"><strong>Phone Number:</strong> ${phoneNumber}</li>
              <li style="margin-bottom: 8px;"><strong>Service Type:</strong> ${serviceType}</li>
              <li style="margin-bottom: 8px;"><strong>Preferred Date:</strong> ${preferredDate}</li>
              <li style="margin-bottom: 8px;"><strong>Preferred Time:</strong> ${preferredTime}</li>
              <li style="margin-bottom: 8px;"><strong>Additional Details:</strong> ${additionalDetails || 'No additional details provided.'}</li>
            </ul>
            <p style="font-size: 16px;">Please respond promptly to ensure excellent customer service.</p>
          </div>
          <div style="background-color: #f8f9fa; color: #333; padding: 16px; text-align: center; border-top: 1px solid #ddd;">
            <p style="margin: 0; font-size: 14px;">Thank you for using our service!</p>
          </div>
        </div>
      `,
    };

    // Email to user (who made the booking)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // The email from the form
      subject: 'Booking Confirmation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #28a745; color: #ffffff; padding: 16px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Booking Confirmation</h1>
          </div>
          <div style="padding: 16px; line-height: 1.6;">
            <p style="font-size: 16px;">Thank you for booking with us! Here are the details of your booking:</p>
            <ul style="list-style-type: none; padding: 0;">
              <li style="margin-bottom: 8px;"><strong>First Name:</strong> ${firstName}</li>
              <li style="margin-bottom: 8px;"><strong>Last Name:</strong> ${lastName}</li>
              <li style="margin-bottom: 8px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007BFF;">${email}</a></li>
              <li style="margin-bottom: 8px;"><strong>Phone Number:</strong> ${phoneNumber}</li>
              <li style="margin-bottom: 8px;"><strong>Service Type:</strong> ${serviceType}</li>
              <li style="margin-bottom: 8px;"><strong>Preferred Date:</strong> ${preferredDate}</li>
              <li style="margin-bottom: 8px;"><strong>Preferred Time:</strong> ${preferredTime}</li>
              <li style="margin-bottom: 8px;"><strong>Additional Details:</strong> ${additionalDetails || 'No additional details provided.'}</li>
            </ul>
            <p style="font-size: 16px;">We will get back to you soon to confirm your booking.</p>
          </div>
          <div style="background-color: #f8f9fa; color: #333; padding: 16px; text-align: center; border-top: 1px solid #ddd;">
            <p style="margin: 0; font-size: 14px;">Thank you for using our service!</p>
          </div>
        </div>
      `,
    };

    // Send email to the admin
    await transporter.sendMail(adminMailOptions);

    // Send email to the user
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send emails.' }, { status: 500 });
  }
}
