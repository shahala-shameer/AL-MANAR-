"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import SocialIcons from "../../components/SocialIcons";
import Image from "next/image";

export default function AboutPage() {
  const { messages, lang } = useLanguage();

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-32 px-6 md:px-16 overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{messages.about.title}</h1>
          <p className="text-lg md:text-2xl mb-4 max-w-3xl mx-auto">{messages.about.description}</p>
          <p className="text-md md:text-lg max-w-3xl mx-auto mt-2">{messages.about.intro1}</p>
          <p className="text-md md:text-lg max-w-3xl mx-auto mt-2">{messages.about.intro2}</p>
          <button
            onClick={() => document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" })}
            className="mt-6 px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition"
          >
            Contact Us
          </button>
        </motion.div>

        {/* Decorative Hero Image */}
        <motion.div
          className="absolute right-0 bottom-0 hidden md:block"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 0.7 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/about-hero.png" // Replace with your hero illustration
            alt="About Hero"
            width={500}
            height={500}
            className="opacity-70"
          />
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-16 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-700 dark:text-yellow-400">
          {messages.about.whyTitle}
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.about.why.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl border-t-4 border-blue-600 dark:border-yellow-400 transition transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="text-gray-700 dark:text-gray-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-700 dark:text-yellow-400">
          {messages.about.servicesTitle}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.about.services.map((service, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-2xl hover:scale-105 transition cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-bold text-lg mb-2">{service}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Detailed description about {service} goes here.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-16 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-700 dark:text-yellow-400">
          What Our Clients Say
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Replace with real testimonials */}
          {[1, 2, 3].map((t) => (
            <motion.div
              key={t}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: t * 0.1 }}
            >
              <p className="italic text-gray-700 dark:text-gray-300">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excellent service!”
              </p>
              <p className="mt-4 font-bold text-gray-900 dark:text-white">- Client Name</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing / Contact CTA */}
      <section className="py-16 px-6 md:px-16 text-center bg-blue-50 dark:bg-gray-900 rounded-2xl mx-6 md:mx-16">
        <motion.p
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {messages.about.closing}
        </motion.p>
        <button
          onClick={() => document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" })}
          className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 font-bold text-gray-900 rounded-lg transition"
        >
          Contact Us
        </button>
      </section>

      {/* Social Icons */}
      <div className="py-12">
        <SocialIcons />
      </div>
    </main>
  );
}
