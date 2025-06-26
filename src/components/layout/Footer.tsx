import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold" style={{ color: "#0F9D58" }}>
              🕌 PK Mosque Finder
            </h2>
            <p className="text-sm text-gray-600">
              Connecting you to nearby mosques, prayer times & events.
            </p>
          </div>

          {/* Right: Navigation */}
          <div className="flex gap-4 text-sm text-gray-600">
            <Link href="/about" className="hover:text-black transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-black transition">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-black transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-black transition">
              Terms
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} PK Mosque Finder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
