"use client";

import Link from "next/link";
import { useState, KeyboardEvent } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Locate, Clock, Star, Building2, Bell, UserCog } from "lucide-react";

const HeroSection = () => {
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
    <section className="min-h-screen pt-26 flex items-center justify-center bg-[#0B9444] text-white relative overflow-hidden">
      <div className="max-w-6xl px-4 text-center w-full">
        {/* Heading */}
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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/mosques">
            <Button variant="outline-yellow" rounded size="lg">
              Explore Mosques
            </Button>
          </Link>
          <Link href="/events">
            <Button variant="outline-yellow" rounded size="lg">
              View Events
            </Button>
          </Link>
          <Link href="/marketplace">
            <Button variant="outline-yellow" rounded size="lg">
              Marketplace
            </Button>
          </Link>
        </div>
      </div>

      {/* Floating Feature Icons with Glassmorphism - Random Placement */}

      <div className="absolute top-24 left-10 z-30">
        <div className="w-28 h-28 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-white/20">
          <Locate className="w-7 h-7 text-white mb-2" />
          <span className="text-xs text-white font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
            Nearby
          </span>
        </div>
      </div>

      <div className="absolute top-60 left-32 z-30">
        <div className="w-28 h-28 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-white/20">
          <Clock className="w-7 h-7 text-white mb-2" />
          <span className="text-xs text-white font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
            Prayer Times
          </span>
        </div>
      </div>

      <div className="absolute bottom-20 right-7 left-24 z-30">
        <div className="w-28 h-28 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-white/20">
          <Star className="w-7 h-7 text-white mb-2" />
          <span className="text-xs text-white font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
            Favorites
          </span>
        </div>
      </div>

      <div className="absolute top-36 right-20 z-30">
        <div className="w-28 h-28 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-white/20">
          <Building2 className="w-7 h-7 text-white mb-2" />
          <span className="text-xs text-white font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
            Details
          </span>
        </div>
      </div>

      <div className="absolute top-80 right-32 z-30">
        <div className="w-28 h-28 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-white/20">
          <Bell className="w-7 h-7 text-white mb-2" />
          <span className="text-xs text-white font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
            Alerts
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 right-16 z-30">
        <div className="w-28 h-28 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-white/20">
          <UserCog className="w-7 h-7 text-white mb-2" />
          <span className="text-xs text-white font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
            Admin
          </span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#F5B502]/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl" />

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B9444] to-transparent" />
    </section>
  );
};

export default HeroSection;
