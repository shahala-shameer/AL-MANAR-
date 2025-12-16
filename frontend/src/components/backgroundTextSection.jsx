"use client";

import { useLanguage } from "../context/LanguageContext";

export default function BackgroundTextSection() {
  const { messages, lang } = useLanguage();

  return (
    <section
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative bg-[url('/background.jpg')] bg-cover bg-center py-32 text-white text-center"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">{messages.background.title}</h2>
        <p className="text-lg">{messages.background.subtitle}</p>
      </div>
    </section>
  );
}
