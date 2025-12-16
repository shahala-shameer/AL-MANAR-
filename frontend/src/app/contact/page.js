"use client";

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import ContactForm from "@/components/ContactForm";
import BranchCards from "@/components/BranchCards";
import SocialIcons from "@/components/SocialIcons";

export default function ContactPage() {
  const { lang, messages } = useLanguage();
  const [status, setStatus] = useState("");

  // Optional: handle form submission status
  const handleSubmitStatus = (message) => setStatus(message);

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen p-8 md:p-16 bg-gray-50 dark:bg-gray-900 flex flex-col items-center gap-12"
    >
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-yellow-400 text-center">
        {messages.contact?.title || "Contact Us"}
      </h1>
 {/* Branch Cards */}
      <BranchCards />
      {/* Contact Form */}
      <ContactForm onStatusChange={handleSubmitStatus} />

      {/* Optional Status Message */}
      {status && (
        <p className="text-center text-green-500 font-medium mt-2">{status}</p>
      )}

     

      {/* Floating Social Icons */}
      <SocialIcons className="absolute right-8 top-1/3 hidden md:flex flex-col gap-4 z-20" />
    </main>
  );
}
