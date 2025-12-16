"use client";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function FloatingWhatsAppButton() {
  const whatsappNumber = "+971523845222"; // change to your real number

  return (
    <Link
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </Link>
  );
}
