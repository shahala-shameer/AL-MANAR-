import express from "express";
import Message from "../models/Message.js";
import { Resend } from "resend";

const router = express.Router();

// 🔐 Lazy + cached Resend instance
let resendInstance = null;

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    console.warn("⚠️ RESEND_API_KEY missing. Email sending disabled.");
    return null;
  }

  if (!resendInstance) {
    resendInstance = new Resend(process.env.RESEND_API_KEY);
  }

  return resendInstance;
}

// POST /messages
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // 🛡 Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Name, email and message are required",
    });
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: "Invalid email format",
    });
  }

  try {
    // 💾 Save to MongoDB
    const newMessage = await Message.create({ name, email, message });

    // ✉️ Send email (if API key exists)
    const resend = getResend();

    if (resend) {
      await resend.emails.send({
        from: "Al Manar <onboarding@resend.dev>", // verified sender
        to: "typingalmanar@gmail.com",
        subject: `New Contact Message from ${name}`,
        html: `
          <h3>New Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });
    }

    return res.json({
      success: true,
      message: "Message received successfully",
      data: {
        id: newMessage._id,
      },
    });
  } catch (err) {
    console.error("Message route error:", err);

    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

export default router;
