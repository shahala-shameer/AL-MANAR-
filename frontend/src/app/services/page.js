"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// Icons
import {
  FaCar,
  FaFileAlt,
  FaIdCard,
  FaHospital,
  FaUsers,
  FaFileSignature,
  FaBuilding,
  FaUserTie,
  FaShieldAlt
} from "react-icons/fa";

import ServiceCard from "../../components/ServiceCard";
import SocialIcons from "../../components/SocialIcons";
import { useLanguage } from "../../context/LanguageContext";

export default function ServicesPage() {
  const { lang } = useLanguage();

  const services = [
    {
      title: lang === "ar" ? "تصاريح راكـتا" : "RAKTA Permits",
      icon: <FaFileAlt size={40} color="#1D4ED8" />,
      description:
        lang === "ar"
          ? "خدمة معالجة تصاريح راكـتا بسرعة ودقة للأفراد والشركات في الإمارات."
          : "Fast and accurate Rakta permit processing for individuals and companies in UAE.",
      premium: true
    },

    {
      title: lang === "ar" ? "طباعة ومعالجة التأشيرات" : "Visa Typing & Processing",
      icon: <FaFileAlt size={40} color="#1D4ED8" />,
      description:
        lang === "ar"
          ? "خدمات شاملة لتقديم طلبات التأشيرة والطباعة والمعالجة بسرعة عالية."
          : "Complete visa application, typing, and processing services with quick turnaround."
    },

    {
      title: lang === "ar" ? "طباعة بطاقة الهوية الإماراتية" : "Emirates ID Typing",
      icon: <FaIdCard size={40} color="#1D4ED8" />,
      description:
        lang === "ar"
          ? "خدمة طباعة وتسجيل احترافية لطلبات بطاقة الهوية الإماراتية."
          : "Professional typing and registration services for Emirates ID applications."
    },

    {
      title: lang === "ar" ? "الطباعة الطبية" : "Medical Typing",
      icon: <FaHospital size={40} color="#1D4ED8" />,
      description:
        lang === "ar"
          ? "خدمات طباعة دقيقة لمستندات طبية للمستشفيات والعيادات."
          : "Accurate medical document typing services for hospitals and clinics."
    },

    {
      title: lang === "ar" ? "خدمات العمل والهجرة" : "Labour & Immigration Services",
      icon: <FaUsers size={40} color="#1D4ED8" />,
      description:
        lang === "ar"
          ? "مساعدة احترافية للعقود العمالية والهجرة وتصاريح العمل."
          : "Expert assistance for labor contracts, immigration, and work permits."
    },

    {
      title: lang === "ar" ? "خدمات التصديق والتوثيق" : "Attestation & Notary Services",
      icon: <FaFileSignature size={40} color="#1D4ED8" />,
      description:
        lang === "ar"
          ? "خدمات موثوقة للتصديق والتوثيق للمستندات الشخصية والتجارية."
          : "Reliable attestation and notary services for personal and business documents."
    },

    {
      title: lang === "ar" ? "تجديد الرخص التجارية" : "Trade License Renewal",
      icon: <FaBuilding size={40} color="#1D4ED8" />,
      description:
        lang === "ar"
          ? "خدمات فعالة لتجديد الرخص التجارية للشركات في جميع أنحاء الإمارات."
          : "Efficient trade license renewal services for businesses across UAE."
    },

    {
      title:
        lang === "ar"
          ? "تأسيس الشركات (البر الرئيسي والمناطق الحرة)"
          : "Company Formation (Mainland & Freezone)",
      icon: <FaBuilding size={40} color="#1D4ED8" />,
      description:
        lang === "ar"
          ? "استشارات احترافية لتأسيس الشركات في البر الرئيسي والمناطق الحرة."
          : "Professional guidance for setting up mainland and freezone companies."
    },

    {
      title: lang === "ar" ? "خدمات العلاقات العامة (PRO)" : "PRO Services",
      icon: <FaUserTie size={40} color="#1D4ED8" />,
      description:
        lang === "ar"
          ? "دعم كامل لإنهاء المعاملات الحكومية والموافقات الرسمية."
          : "Full PRO support for government paperwork and approvals."
    },

    {
      title: lang === "ar" ? "موافقات الدفاع المدني" : "Civil Defense Approvals",
      icon: <FaShieldAlt size={40} color="#1D4ED8" />,
      description:
        lang === "ar"
          ? "خدمات سريعة ودقيقة للحصول على موافقات الدفاع المدني لمشاريعك."
          : "Quick and accurate civil defense approval services for your projects."
    }
  ];

  // ⬇️⬇️ SMOOTH AND ACCURATE SCROLL FIX ⬇️⬇️
  const scrollToService = (index) => {
    const element = document.getElementById(`service-${index}`);
    if (!element) return;

    const yOffset = -80; // adjust if you have navbar
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // ------------------------------
  return (
    <main dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-gray-50 dark:bg-gray-900">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-500 to-blue-700 dark:from-gray-800 dark:to-gray-900 text-white py-32 px-6 md:px-16 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {lang === "ar" ? "خدماتنا المميزة" : "Our Premium Services"}
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {lang === "ar"
              ? "نقدم خدمات دقيقة وسريعة للأفراد والشركات في جميع أنحاء الإمارات."
              : "We provide fast and accurate services for individuals and companies across the UAE."}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => scrollToService(index)}
                className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full shadow transition"
              >
                {service.title}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-700 dark:text-yellow-400">
          {lang === "ar" ? "خدماتنا" : "Our Services"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, index) => (
            <motion.div
              key={index}
              id={`service-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ServiceCard
                title={svc.title}
                index={index}
                icon={svc.icon}
                description={svc.description}
                gradient={
                  svc.premium
                    ? "bg-gradient-to-tr from-yellow-400 via-yellow-300 to-yellow-200"
                    : null
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 px-6 md:px-16 text-center bg-blue-600 dark:bg-gray-800 text-white">
        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {lang === "ar"
            ? "هل أنت مستعد لخدمات سلسة للمستندات؟"
            : "Ready to experience hassle-free document services?"}
        </motion.h3>

        <motion.p
          className="mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {lang === "ar"
            ? "دعنا نتولى مستنداتك بدقة وسرعة."
            : "Let us handle your paperwork with precision and speed."}
        </motion.p>

        {/* Go to Contact Page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/contact">
            <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-lg transition">
              {lang === "ar" ? "اتصل بنا" : "Contact Us"}
            </button>
          </Link>
        </motion.div>
      </section>

      <SocialIcons />
    </main>
  );
}
