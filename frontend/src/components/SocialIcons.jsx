"use client";

import { Mail, Facebook, Instagram, MessageSquare } from "lucide-react";
import { useTheme } from "next-themes";

export default function SocialIcons() {
  const { theme } = useTheme();

  const icons = [
    {
      href: "mailto:typingalmanar@gmail.com?subject=Inquiry&body=Hello, I would like to know more about your services.",
      icon: <Mail size={24} />,
      label: "Email Us",
    },
    {
      href: "https://wa.me/+971523845222.",
      icon: <MessageSquare size={24} />,
      label: "Chat on WhatsApp",
    },
    {
      href: "https://www.facebook.com/share/16xkDMWx5Y/?mibextid=wwXIfr",
      icon: <Facebook size={24} />,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/typingalmanar?igsh=MWc1djQ5cnRsNjh4eQ==",
      icon: <Instagram size={24} />,
      label: "Instagram",
    },
  ];

  return (
    <div className="flex gap-4 justify-center mt-6">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.label}
          aria-label={item.label}
          className={`p-3 rounded-full transition-transform transform hover:scale-110 ${
            theme === "light" ? "bg-gray-100 text-gray-700" : "bg-gray-800 text-white"
          }`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
