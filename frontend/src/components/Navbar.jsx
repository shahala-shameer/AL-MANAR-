"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const { messages, lang, toggleLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleThemeSafe = () => {
    if (!mounted) return;
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleNavClick = (href) => {
    setMenuOpen(false);
    setBranchesOpen(false);
    router.push(href);
  };

  const navLinks = [
    { id: "home", label: messages.home?.title || "Home", href: "/" },
    { id: "about", label: messages.about?.title || "About", href: "/#about-section" },
    { id: "services", label: messages.about?.servicesTitle || "Services", href: "/services" },
    { id: "contact", label: messages.contact?.title || "Contact", href: "/#contact-section" },
  ];

  const branches = [
    { id: 1, name: messages.branches?.main || "Main Branch – Ras Al Khaimah", href: "/branches#main" },
    { id: 2, name: messages.branches?.branch1 || "Branch 1 – Ras Al Khaimah", href: "/branches#branch1" },
  ];

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <nav className={`fixed top-0 w-full z-50 shadow-md transition-colors ${pathname === "/" ? "bg-transparent" : "bg-white dark:bg-gray-900"}`}>
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 py-3"> {/* normal height */}

        {/* Logo */}
        <div className="flex flex-col items-center cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}   // bigger logo
            height={80}  // bigger logo
            className="object-contain"
          />
          <span className="mt-1 font-semibold tracking-widest text-yellow-500 text-sm sm:text-base md:text-lg">
            AL MANAR
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.href)}
              className={`transition text-sm sm:text-base md:text-lg lg:text-lg ${isActive(link.href) ? "text-blue-600 dark:text-yellow-400 font-bold" : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-400"}`}
            >
              {link.label}
            </button>
          ))}

          {/* Branches Dropdown */}
          <div className="relative group">
            <button className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-400 font-medium flex items-center gap-1 transition">
              {messages.branches?.title || "Branches"} <ChevronDown size={16} />
            </button>
            <div className={`absolute ${lang === "ar" ? "right-0" : "left-0"} hidden group-hover:flex flex-col bg-white dark:bg-gray-800 shadow-xl rounded-lg p-2 w-56 z-50`}>
              {branches.map((branch) => (
                <button key={branch.id} onClick={() => handleNavClick(branch.href)} className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition text-sm sm:text-base md:text-lg lg:text-lg">
                  {branch.name}
                </button>
              ))}
            </div>
          </div>

          {/* Theme & Language Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={toggleLanguage} className="px-3 sm:px-4 py-1 sm:py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition text-xs sm:text-sm md:text-base">
              {lang === "en" ? "العربية" : "English"}
            </button>
            {mounted && (
              <button onClick={toggleThemeSafe} className="p-2 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition">
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 sm:p-3 text-gray-700 dark:text-gray-200" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden flex flex-col ${lang === "ar" ? "items-end text-right" : "items-start text-left"} bg-white dark:bg-gray-900 px-6 pb-4 gap-4 absolute top-full left-0 w-full z-40`}>
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => handleNavClick(link.href)} className={`transition w-full text-sm sm:text-base md:text-lg lg:text-lg ${isActive(link.href) ? "text-blue-600 dark:text-yellow-400 font-bold" : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-400"}`}>
              {link.label}
            </button>
          ))}

          {/* Mobile Branches Dropdown */}
          <button onClick={() => setBranchesOpen(!branchesOpen)} className="flex items-center justify-between w-full px-3 py-2 text-gray-700 dark:text-gray-200 font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition text-sm sm:text-base md:text-lg lg:text-lg">
            {messages.branches?.title || "Branches"}
            <ChevronDown size={16} className={`${branchesOpen ? "rotate-180" : ""} transition`} />
          </button>
          {branchesOpen && branches.map((branch) => (
            <button key={branch.id} onClick={() => handleNavClick(branch.href)} className="block w-full text-left px-6 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition text-sm sm:text-base md:text-lg lg:text-lg">
              {branch.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
