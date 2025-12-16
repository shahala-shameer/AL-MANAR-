"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export default function HeroVideo() {
  const [videoUrl, setVideoUrl] = useState(null);
  const { theme } = useTheme();
  const { lang, messages } = useLanguage();
  const videoRef = useRef();

  const fallbackVideo =
    "https://res.cloudinary.com/diytunewi/video/upload/v1764509549/cvuq90dyjb7okvjbsmmn.mp4";

  useEffect(() => {
    async function loadVideo() {
      try {
        const res = await fetch("http://localhost:5000/videos");
        if (!res.ok) throw new Error("Network response not ok");
        const data = await res.json();
        setVideoUrl(data?.video?.url || fallbackVideo);
      } catch (err) {
        console.error("Error fetching video:", err);
        setVideoUrl(fallbackVideo);
      }
    }
    loadVideo();
  }, []);

  const t = messages?.hero || {
    heading: "15,000+ Enterprises Trust Us",
    subheading: "6 Years of Proven Expertise in UAE Business Setup",
    button: "Contact Us",
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // stagger heading, subtitle, button
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)" },
  };

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {videoUrl && (
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Centered Text */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-12 text-white text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          variants={headingVariants}
          className="text-4xl md:text-6xl font-extrabold drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 mb-8"
        >
          {t.heading}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={subtitleVariants}
          className="text-lg md:text-2xl opacity-90 mb-12"
        >
          {t.subheading}
        </motion.p>

        {/* Button */}
        <motion.a
          href="#contact-section"
          variants={buttonVariants}
          whileHover="hover"
          className={`inline-block px-6 py-3 rounded-full font-semibold shadow-lg transition
            ${
              theme === "light"
                ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                : "bg-yellow-300 text-black hover:bg-yellow-400"
            }`}
        >
          {t.button}
        </motion.a>
      </motion.div>
    </section>
  );
}
