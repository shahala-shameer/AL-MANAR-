"use client";
import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext"; // language context

export default function BelowHeroColumns({
  image = "/pic1.png",
  title,
  subtitle,
  ctaText,
  ctaLink,
  phone = "+971523845222",
  rightImage = "https://www.computerworld.com/wp-content/uploads/2024/09/1526102-0-13182000-1725999392-shutterstock_2208430269.jpg?resize=1536%2C1079&quality=50&strip=all",
}) {
  const { lang } = useLanguage(); // get current language
  const textAlign = lang === "ar" ? "text-right md:text-right" : "text-left md:text-left";

  // Default content for English and Arabic
  const content = {
    en: {
      title: title || "Get Guaranteed Success With Our Business Advisors",
      subtitle:
        subtitle ||
        "Starting a business in Ras Al Khaimah can be daunting, but with help from our experienced business setup consultants, it doesn’t have to be...",
      section2Title: "Professional Advisors",
      section2Subtitle: "We Make Your Business Grow",
      section2Text:
        "Want to grow your business but don't know which growth strategies to adopt? Here are tried and true ways to grow your business. Happy to help you. We make your business bright.",
      call: `Call ${phone}`,
    },
    ar: {
      title: title || "احصل على النجاح المضمون مع مستشارينا للأعمال",
      subtitle:
        subtitle ||
        "قد يكون بدء عمل تجاري في رأس الخيمة مهمة شاقة، ولكن بمساعدة مستشارينا ذوي الخبرة، لن يكون الأمر كذلك...",
      section2Title: "مستشارون محترفون",
      section2Subtitle: "نجعل عملك ينمو",
      section2Text:
        "هل تريد تنمية عملك ولا تعرف استراتيجيات النمو التي يجب اعتمادها؟ إليك طرق مجربة لتنمية عملك. يسعدنا مساعدتك وجعل عملك متألقًا.",
      call: `اتصل على ${phone}`,
    },
  };

  const [offsetY, setOffsetY] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef();

  // Parallax scroll
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for text animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      {/* ===== First Section: Below Hero Columns ===== */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={image}
              alt={content[lang].title}
              className="w-full h-auto rounded shadow-lg object-cover"
            />
          </div>

          {/* Right Side Text */}
          <div className={`space-y-4 ${textAlign}`}>
            <h3 className="text-2xl md:text-3xl font-bold">{content[lang].title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{content[lang].subtitle}</p>
            {ctaText && ctaLink && (
              <a
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                href={ctaLink}
              >
                {ctaText}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ===== Second Section: Text Left/Right (RTL), Parallax Image ===== */}
      <section
        ref={sectionRef}
        className={`relative w-full flex flex-col md:flex-row h-[600px] overflow-hidden ${
          lang === "ar" ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left Text Content */}
        <div
          className={`absolute md:relative md:w-1/2 md:pr-12 flex flex-col justify-center px-6 text-black z-10 h-full transition-all duration-1000 ${
            inView ? "translate-x-0 opacity-100" : lang === "ar" ? "translate-x-20 opacity-0" : "-translate-x-20 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold">{content[lang].section2Title}</h2>
          <h3 className="text-xl md:text-2xl font-semibold mt-2">{content[lang].section2Subtitle}</h3>
          <p className="text-md md:text-lg mt-4 mb-6">{content[lang].section2Text}</p>
          <a
            href={`tel:${phone}`}
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-6 py-3 rounded-full transition"
          >
            {content[lang].call}
          </a>
        </div>

        {/* Right Image with Parallax */}
        <div className="w-full md:w-1/2 h-full relative">
          <img
            src={rightImage}
            alt="Right Background"
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${offsetY * 0.2}px)` }} // parallax effect
          />
          <div
            className="absolute inset-0"
            style={{
              background: lang === "ar"
                ? "linear-gradient(to right, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 100%)"
                : "linear-gradient(to left, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 100%)",
            }}
          ></div>
        </div>
      </section>
    </>
  );
}
