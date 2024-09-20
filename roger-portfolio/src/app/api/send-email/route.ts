import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { name, email, message } = await req.json();

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Setup email data
  let mailOptions = {
    from: email,
    to: "rogernapuo1999@gmail.com",
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending email", error: (error as Error).message },
      { status: 500 }
    );
  }
};
