"use client";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, toggleLanguage } = useLanguage();
  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      {lang === "en" ? "العربية" : "English"}
    </button>
  );
}
