import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0B9444] text-white relative overflow-hidden">
      <div className="max-w-5xl px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Find Mosques Near You <br />& Stay Connected with Your Community
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-6">
          Discover prayer times, community events, and Islamic products — all in
          one place.
        </p>
        <Link
          href="/mosques"
          className="inline-block bg-[#F5B502] text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
        >
          Explore Mosques
        </Link>
      </div>

      {/* Optional decorative shapes or background */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B9444] to-transparent" />
    </section>
  );
};

export default HeroSection;
