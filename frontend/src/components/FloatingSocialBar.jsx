"use client";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function FloatingSocialBar() {
  const socials = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={22} />,
      link: "https://wa.me/+971523845222", // 🔹 Replace with your real WhatsApp number
      color: "bg-green-500",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={22} />,
      link: "https://www.instagram.com/typingalmanar?igsh=MWc1djQ5cnRsNjh4eQ==", // 🔹 Replace with your page
      color: "bg-pink-500",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF size={22} />,
      link: "https://www.facebook.com/share/16xkDMWx5Y/?mibextid=wwXIfr", // 🔹 Replace with your page
      color: "bg-blue-600",
    },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {socials.map((item) => (
        <a
          key={item.name}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative flex items-center justify-between w-12 hover:w-40 overflow-hidden text-white ${item.color} rounded-r-full shadow-lg transition-all duration-300`}
        >
          <div className="flex items-center gap-3 px-3 py-2">
            {item.icon}
            <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {item.name}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
