// pages/api/send-email.js

import nodemailer from "nodemailer";

interface RequestBody {
  name: string;
  email: string;
  message: string;
}

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: "gmail", // e.g., Gmail, you can also use other services like SendGrid, etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email data
    let mailOptions = {
      from: email, // Sender's email
      to: "your-email@gmail.com", // Your email to receive the form data
      subject: `New message from ${name}`, // Subject
      text: message, // Message body
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Error sending email",
          error: (error as Error).message,
        });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
