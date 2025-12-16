"use client";
import { createContext, useContext, useState, useEffect } from "react";
import en from "../i18n/en.json";
import ar from "../i18n/ar.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [messages, setMessages] = useState(en);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLang(savedLang);
    setMessages(savedLang === "en" ? en : ar);
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    setMessages(newLang === "en" ? en : ar);
    localStorage.setItem("lang", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, messages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
