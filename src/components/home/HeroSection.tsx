"use client";

import { useState, KeyboardEvent } from "react";
import { useTranslations } from "next-intl";

import { Button, Input } from "@/components";

import { Search, Users, Sun, MapPin, Star, Moon } from "lucide-react";

const HeroSection = () => {
  const t = useTranslations("home.hero");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/mosques?search=${encodeURIComponent(
        searchQuery
      )}`;
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <section className="relative bg-gradient-to-b from-[#0B9444] to-[#06522B] text-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl w-full text-center space-y-8">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight flex flex-col gap-3">
          <span className="flex items-center justify-center gap-2">
            <Moon size={36} /> {t("headline1")}
          </span>
          <span className="text-[#F5B502] flex items-center justify-center gap-2">
            <Star size={36} /> {t("headline2")}
          </span>
        </h1>

        {/* Quranic Ayah */}
        <p
          className={`text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mt-4 rtl`}
        >
          {t("ayah")}
        </p>
        <p className="text-white/80 mt-2 italic max-w-2xl mx-auto">
          {t("ayah_translation")}
        </p>

        {/* Search Input */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto mt-4">
          <Input
            placeholder={t("search_placeholder")}
            value={searchQuery}
            onChange={setSearchQuery}
            variant="secondary-outline"
            rounded
            icon={<Search />}
          />
          <Button size="lg" rounded variant="secondary" onClick={handleSearch}>
            <Search size={20} /> {t("search_button")}
          </Button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
          {/* Add Mosque */}
          <div className="flex flex-col items-center">
            <Button
              size="lg"
              rounded
              variant="rounded"
              onClick={() => (window.location.href = "/add-mosque")}
            >
              <Users size={20} /> {t("add_mosque")}
            </Button>
            <span className="mt-2 text-sm text-white/80 max-w-xs">
              {t("add_mosque_text")}
            </span>
          </div>

          {/* Add Prayer Timings */}
          <div className="flex flex-col items-center">
            <Button
              size="lg"
              rounded
              variant="rounded"
              onClick={() => (window.location.href = "/add-prayer-timing")}
            >
              <Sun size={20} /> {t("add_prayer")}
            </Button>
            <span className="mt-2 text-sm text-white/80 max-w-xs">
              {t("add_prayer_text")}
            </span>
          </div>

          {/* Find Mosque Near You */}
          <div className="flex flex-col items-center">
            <Button
              size="lg"
              rounded
              variant="rounded"
              onClick={() => (window.location.href = "/find-mosques-near-me")}
            >
              <MapPin size={20} /> {t("find_mosque")}
            </Button>
            <span className="mt-2 text-sm text-white/80 max-w-xs">
              {t("find_mosque_text")}
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-white/10 rounded-full blur-3xl" />
    </section>
  );
};

export { HeroSection };
