"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button } from "../ui";
import LanguageSwitcher from "./LanguageSwitcher";
import { Landmark, Menu } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("navigation");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("home"), href: "/home" },
    { name: t("mosques"), href: "/mosques" },
    { name: t("events"), href: "/events" },
    { name: t("marketplace"), href: "/marketplace" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-green-600/90 backdrop-blur-md border-b border-green-500/30 shadow-lg"
          : "bg-green-600/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-white flex items-center gap-2 hover:text-green-100 transition-colors"
        >
          <Landmark className="w-8 h-8" />
          MosqueFinder
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-bold transition-colors ${
                pathname.startsWith(item.href)
                  ? "text-white"
                  : "text-green-100 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <LanguageSwitcher />
          <Button variant="secondary" rounded className="text-sm font-semibold">
            Register
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="outline-yellow"
            size="sm"
            className="p-2 text-white hover:bg-green-500/30"
            onClick={() => {
              /* Add mobile menu toggle logic */
            }}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
