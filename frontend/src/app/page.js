"use client";

import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "next-themes";
import GovernmentBodies from "../components/GovernmentBodies";
import BelowHeroColumns from "../components/BelowHeroColumns";
import AboutSection from "@/components/AboutSection";
import ContactForm from "../components/ContactForm";
import BranchCards from "../components/BranchCards";
import "../globals.css";


export default function Home() {
  const { lang } = useLanguage();
  const { theme } = useTheme();

  // Dynamic background for branches section
  const sectionBg =
    theme === "dark"
      ? "bg-gradient-to-r from-black via-gray-900 to-gray-800"
      : "bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50";

  return (
    <main
      id="Home"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-gradient-to-bl from-blue-50 to-white"
    >
      {/* Hero / Below Hero Columns */}
      <BelowHeroColumns lang={lang} />

 {/* Government bodies cards */}
      <GovernmentBodies />

      {/* About Section */}
      <AboutSection />

      {/* Branches Section */}
    <section
      id="branches-section"
      className={`${sectionBg} py-16 px-6 md:px-16`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:gap-12">
        {/* Heading on left */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 md:mb-0 md:w-1/3 text-blue-700 dark:text-yellow-400">
          {lang === "ar" ? "فروعنا" : "OUR BRANCHES"}
        </h2>

        {/* Cards on right */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          <BranchCards />
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section
        id="contact-section"
        className="py-16 px-6 md:px-16 bg-gray-50 dark:bg-gray-900"
      >
       
        <ContactForm />
      </section>
    </main>
  );
}
