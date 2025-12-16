"use client";

import { useLanguage } from "../context/LanguageContext";
import SocialIcons from "./SocialIcons";
import Link from "next/link";

export default function Footer() {
  const { lang, messages } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: messages.home?.title || "Home", href: "/" },
    { label: messages.about?.title || "About", href: "/#about-section" },
    { label: messages.services?.title || "Services", href: "/services" },
    { label: messages.contact?.title || "Contact", href: "/#contact-section" },
  ];

  return (
    <footer
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white pt-12 pb-6 px-6"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-yellow-400">{messages.about?.title || "About Us"}</h3>
          <p className="text-sm text-gray-300">
            {messages.about?.description ||
              "AL MANAR is a leading travel and tourism company, providing exceptional experiences in Ras Al Khaimah and beyond."}
          </p>
        </div>

        {/* Contact Button */}
        <div className="flex flex-col gap-4 items-start md:items-center">
          <h3 className="text-lg font-semibold text-yellow-400">{messages.contact?.title || "Contact Us"}</h3>
          <Link
            href="/#contact-section"
            className="px-5 py-2 bg-yellow-500 text-blue-900 font-semibold rounded-full hover:bg-yellow-400 transition-colors shadow-lg"
          >
            {messages.contact?.buttonText || "Contact Us"}
          </Link>
        </div>

        {/* Quick Links & Social */}
        <div className="flex flex-col gap-4 items-start md:items-end">
          <h3 className="text-lg font-semibold text-yellow-400">{messages.quickLinks || "Quick Links"}</h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-blue-700 pt-4 text-center text-sm text-gray-400">
        &copy; {currentYear} AL MANAR. {messages.rights || "All rights reserved."}
      </div>
    </footer>
  );
}
