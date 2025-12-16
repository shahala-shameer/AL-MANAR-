"use client";

import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export default function AboutSection() {
  const { messages, lang } = useLanguage();

  const whyIcon = "✅";
  const serviceIcon = "✨";

  return (
    <section
      id="about-section"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="py-24 px-6 md:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      {/* Title */}
      <motion.h2
        className="text-center text-4xl md:text-5xl font-extrabold mb-6
                   bg-clip-text text-transparent
                   bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                   dark:text-yellow-400 dark:bg-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {messages.about.title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {messages.about.description}
      </motion.p>

      {/* Intro paragraphs */}
      <div className="space-y-6 max-w-4xl mx-auto text-center">
        {["intro1", "intro2"].map((key, i) => (
          <motion.p
            key={i}
            className="text-lg md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
          >
            {messages.about[key]}
          </motion.p>
        ))}
      </div>

      {/* Why Choose Us */}
      <motion.div
        className="mt-16 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h3 className="text-center text-3xl md:text-4xl font-semibold mb-6
                       bg-clip-text text-transparent
                       bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                       dark:text-yellow-400 dark:bg-none"
        >
          {messages.about.whyTitle}
        </h3>
        <ul className="space-y-4">
          {messages.about.why.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 text-blue-500 dark:text-yellow-400">{whyIcon}</span>
              <span className="text-gray-700 dark:text-gray-200">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Services */}
      <motion.div
        className="mt-16 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <h3 className="text-center text-3xl md:text-4xl font-semibold mb-6
                       bg-clip-text text-transparent
                       bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                       dark:text-yellow-400 dark:bg-none"
        >
          {messages.about.servicesTitle}
        </h3>
        <ul className="space-y-4">
          {messages.about.services.map((service, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 text-blue-500 dark:text-yellow-400">{serviceIcon}</span>
              <span className="text-gray-700 dark:text-gray-200">{service}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Closing */}
      <motion.p
        className="mt-20 text-center text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        {messages.about.closing}
      </motion.p>
    </section>
  );
}
