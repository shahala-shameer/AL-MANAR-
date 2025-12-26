"use client";

import { Mail, Facebook, Instagram, MessageSquare } from "lucide-react";
import { useTheme } from "next-themes";

export default function SocialIcons() {
  const { theme } = useTheme();

  // Gmail → mailto fallback logic
  const openEmail = () => {
    const gmailURL =
      "https://mail.google.com/mail/?view=cm&fs=1&to=typingalmanar@gmail.com&su=Inquiry&body=Hello, I would like to know more about your services.";

    const mailtoURL =
      "mailto:typingalmanar@gmail.com?subject=Inquiry&body=Hello, I would like to know more about your services.";

    const win = window.open(gmailURL, "_blank");

    setTimeout(() => {
      if (!win || win.closed || typeof win.closed === "undefined") {
        window.location.href = mailtoURL;
      }
    }, 500);
  };

  const iconStyle = `p-3 rounded-full transition-transform hover:scale-110 ${
    theme === "light"
      ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
      : "bg-gray-800 text-white hover:bg-gray-700"
  }`;

  return (
    <div className="flex gap-4 justify-center mt-6">
      {/* Email */}
      <button
        onClick={openEmail}
        title="Email Us"
        aria-label="Email Us"
        className={iconStyle}
      >
        <Mail size={24} />
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/971523845222"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
        className={iconStyle}
      >
        <MessageSquare size={24} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/16xkDMWx5Y/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
        aria-label="Facebook"
        className={iconStyle}
      >
        <Facebook size={24} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/typingalmanar"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
        aria-label="Instagram"
        className={iconStyle}
      >
        <Instagram size={24} />
      </a>
    </div>
  );
}
