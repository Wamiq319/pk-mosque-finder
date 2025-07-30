"use client";

import { useEffect, useState, KeyboardEvent } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

type IslamicInfo = {
  gregorianDate: string;
  hijriDate: string;
  sunrise: string;
  sunset: string;
  eidFitr: string;
  eidAdha: string;
  ramadanStart: string;
};

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [info, setInfo] = useState<IslamicInfo | null>(null);

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

  useEffect(() => {
    const fetchIslamicInfo = async () => {
      try {
        const response = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity?city=Lahore&country=Pakistan&method=2`
        );
        const data = response.data.data;

        const hijriDate = data.date.hijri;
        const gregorianDate = data.date.gregorian;

        setInfo({
          gregorianDate: `${gregorianDate.weekday.en}, ${gregorianDate.day} ${gregorianDate.month.en} ${gregorianDate.year}`,
          hijriDate: `${hijriDate.day} ${hijriDate.month.en} ${hijriDate.year} AH`,
          sunrise: data.timings.Sunrise,
          sunset: data.timings.Sunset,
          ramadanStart: "1 March 2025", // You can calculate based on Hijri calendar later
          eidFitr: "29 March 2025",
          eidAdha: "7 June 2025",
        });
      } catch (error) {
        console.error("Failed to fetch Islamic info", error);
      }
    };

    fetchIslamicInfo();
  }, []);

  return (
    <section className="min-h-screen pt-26 flex items-center justify-center bg-[#0B9444] text-white relative overflow-hidden">
      <div className="max-w-6xl px-4 text-center w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Find Mosques Near You <br />
          <span className="text-[#F5B502]">& Stay Connected</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover prayer times, events & community updates — all in one place.
        </p>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="Search for mosques, events, or products..."
              value={searchQuery}
              onChange={setSearchQuery}
              variant="secondary-outline"
              rounded
              onKeyDown={handleKeyPress}
            />
            <Button
              variant="outline-yellow"
              size="lg"
              rounded
              onClick={handleSearch}
              className="whitespace-nowrap"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Islamic Info */}
        {info && (
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-lg space-y-3 text-sm md:text-base text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div>
                <p className="font-medium">📅 Gregorian Date:</p>
                <p>{info.gregorianDate}</p>

                <p className="font-medium mt-2">🕌 Islamic Date:</p>
                <p>{info.hijriDate}</p>

                <p className="font-medium mt-2">🌙 Ramadan Starts:</p>
                <p>{info.ramadanStart}</p>
              </div>

              <div>
                <p className="font-medium">🌅 Sunrise:</p>
                <p>{info.sunrise}</p>

                <p className="font-medium mt-2">🌇 Sunset:</p>
                <p>{info.sunset}</p>

                <p className="font-medium mt-2">🎉 Eid-ul-Adha:</p>
                <p>{info.eidAdha}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#F5B502]/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl" />

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B9444] to-transparent" />
    </section>
  );
};

export default HeroSection;
