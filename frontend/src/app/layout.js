"use client";

import ThemeWrapper from "../components/ThemeWrapper";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsappButton";
import FloatingSocialBar from "@/components/FloatingSocialBar";
import "../globals.css";
import HeroVideo from "../components/HeroVideo";
import { usePathname } from "next/navigation";

// A wrapper to set <html> attributes dynamically
function HtmlWrapper({ children }) {
  const { lang } = useLanguage();
  const pathname = usePathname();

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <ThemeWrapper>
          <Navbar />
          {/* Only show HeroVideo on home page */}
          {pathname === "/" && <HeroVideo />}
          {children}
          <FloatingSocialBar />
          <FloatingWhatsAppButton />
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <HtmlWrapper>{children}</HtmlWrapper>
    </LanguageProvider>
  );
}
