"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage } from "../context/LanguageContext";

export default function BranchCards() {
  const { theme } = useTheme();
  const { lang } = useLanguage();

  const branches = [
    {
      id: 1,
      name: {
        en: "Main Branch – Ras Al Khaimah",
        ar: "الفرع الرئيسي – رأس الخيمة",
      },
      location: {
        en: "Al Uraibi Building - opp. RAK Bank - Al Nakheel, Ras Al Khaimah",
        ar: "مبنى العريبي - مقابل بنك رأس الخيمة - النخيل، رأس الخيمة",
      },
      href:   "https://www.google.com/maps/search/?api=1&query=Al+Manar+Typing+%26+Documents+Clearing+RAK",

    },
    {
      id: 2,
      name: {
        en: "Branch 1 – Ras Al Khaimah",
        ar: "فرع 1 – رأس الخيمة",
      },
      location: {
        en: "Airport Rd - Al Digdaga - Ras Al Khaimah",
        ar: "طريق المطار - الدقداقة - رأس الخيمة",
      },
      href:      "https://www.google.com/maps/search/?api=1&query=AL+MANAR+TYPING+%26+DOCUMENTS+CLEARING+BR+1"

    },
  ];

  return (
    <>
      {branches.map((branch, index) => (
        <motion.a
          key={branch.id}
          href={branch.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="
            relative group p-6 rounded-2xl shadow-lg overflow-hidden
            hover:-translate-y-1 hover:scale-105 transition
            bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-600
            dark:from-black dark:to-gray-800
            text-white dark:text-yellow-400 cursor-pointer
          "
        >
          {/* Background watermark */}
          <div
            className="
              absolute inset-0 bg-[url('/icon.jpg')]
              bg-cover bg-center opacity-10 rounded-2xl
              z-0
            "
          />

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-200 dark:group-hover:text-yellow-300 transition">
              {lang === "ar" ? branch.name.ar : branch.name.en}
            </h3>

            <p className="text-blue-100 dark:text-gray-300">
              {lang === "ar" ? branch.location.ar : branch.location.en}
            </p>
          </div>

          {/* Arrow */}
          <span className="absolute top-4 right-4 text-blue-200 group-hover:text-white dark:text-gray-400 dark:group-hover:text-yellow-300 transition z-10">
            &rarr;
          </span>
        </motion.a>
      ))}
    </>
  );
}
