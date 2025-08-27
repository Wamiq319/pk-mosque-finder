"use client";

import { Locate, Clock, Star, Building2, Bell, UserCog } from "lucide-react";

const features = [
  {
    title: "Nearby Mosques",
    description:
      "Find mosques closest to your location with GPS-enabled accuracy.",
    icon: <Locate className="w-6 h-6 text-[#0B9444]" />,
  },
  {
    title: "Prayer Timings",
    description: "View live updated Iqamah and Jummah timings of mosques.",
    icon: <Clock className="w-6 h-6 text-[#0B9444]" />,
  },
  {
    title: "Favorites",
    description: "Save your preferred mosques to access them anytime.",
    icon: <Star className="w-6 h-6 text-[#0B9444]" />,
  },
  {
    title: "Detailed Profiles",
    description:
      "View capacity, services, women's area, and madrassah details.",
    icon: <Building2 className="w-6 h-6 text-[#0B9444]" />,
  },
  {
    title: "Live Alerts",
    description:
      "Receive real-time updates like electricity issues or special prayers.",
    icon: <Bell className="w-6 h-6 text-[#0B9444]" />,
  },
  {
    title: "Mosque Admin Panel",
    description: "Admins can manage listings, upload events and get insights.",
    icon: <UserCog className="w-6 h-6 text-[#0B9444]" />,
  },
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f0fdf4] text-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0B9444]">
          What We Offer
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Empowering the Muslim community with smart, real-time mosque data and
          events.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-[#0B9444]/10 text-[#0B9444]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeatureSection };
