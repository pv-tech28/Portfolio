import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const timestamp = new Date().toISOString();
    
    const dataDir = path.join(process.cwd(), "data");
    const csvPath = path.join(dataDir, "contacts.csv");

    // Ensure data directory exists
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }
}
