"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function ServiceCard({ title, index, icon, description }) {
  const { lang } = useLanguage();

  return (
    <motion.div
      className="p-6 rounded-2xl shadow-lg bg-gradient-to-tr from-white via-blue-50 to-blue-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 transform transition duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Icon */}
      {icon && (
        <div
          className={`absolute top-4 w-16 h-16 flex items-center justify-center opacity-30 ${
            lang === "ar" ? "left-4" : "right-4"
          }`}
        >
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
