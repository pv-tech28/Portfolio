import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const timestamp = new Date().toISOString();
    
    // 1. Save to CSV (Backup)
    const dataDir = path.join(process.cwd(), "data");
    const csvPath = path.join(dataDir, "contacts.csv");

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const header = "timestamp,name,email,message\n";
    const row = `"${timestamp}","${name.replace(/"/g, '""')}","${email.replace(/"/g, '""')}","${message.replace(/"/g, '""')}"\n`;

    if (!fs.existsSync(csvPath)) {
      fs.writeFileSync(csvPath, header + row);
    } else {
      fs.appendFileSync(csvPath, row);
    }

    // 2. Send Email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "prathavarshney10@gmail.com",
        // You should use an App Password for Gmail
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || "prathavarshney10@gmail.com",
      to: "prathavarshney10@gmail.com",
      subject: `New Portfolio Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        Timestamp: ${timestamp}
      `,
      html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Timestamp:</strong> ${timestamp}</p>
      `,
    };

    // Only attempt to send if credentials are provided
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.warn("Email credentials missing. Message saved to CSV but not sent via email.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 });
  }
}
