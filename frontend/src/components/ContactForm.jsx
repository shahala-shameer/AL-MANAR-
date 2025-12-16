"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import SocialIcons from "./SocialIcons"; // make sure this path is correct
import { motion } from "framer-motion";

export default function Contact() {
  const { messages, lang } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(messages.contact.sending || "Sending...");
    try {
      // Simulate sending delay
      setTimeout(() => {
        setStatus(messages.contact.success);
        setFormData({ name: "", email: "", message: "" });
      }, 1200);
    } catch (error) {
      setStatus(messages.contact.error || "Failed to send message.");
    }
  };

  return (
    <section
      id="contact-section"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative py-20 px-6 md:px-16 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 overflow-hidden"
    >
      {/* Decorative Background Circles */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-300 rounded-full opacity-30 animate-pulse dark:bg-yellow-400"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-400 rounded-full opacity-20 animate-ping dark:bg-yellow-500"></div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-700 dark:text-yellow-400"
      >
        {messages.contact.title}
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-lg mx-auto flex flex-col gap-5 bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-2xl z-10"
      >
        <input
          type="text"
          name="name"
          placeholder={messages.contact.name}
          value={formData.name}
          onChange={handleChange}
          className="p-4 border rounded-xl dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder={messages.contact.email}
          value={formData.email}
          onChange={handleChange}
          className="p-4 border rounded-xl dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400"
          required
        />
        <textarea
          name="message"
          placeholder={messages.contact.message}
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="p-4 border rounded-xl dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400"
          required
        />
        <button
          type="submit"
          className="py-4 bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white font-bold rounded-xl transition"
        >
          {messages.contact.submit}
        </button>
        {status && (
          <p className="mt-2 text-center text-green-500 font-medium">{status}</p>
        )}
      </motion.form>

      {/* Floating Social Icons */}
      <SocialIcons className="absolute right-8 top-1/3 hidden md:flex flex-col gap-4 z-20" />
    </section>
  );
}
