import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 top-0 left-0 transition-all duration-300 ${
        navbarScrolled ? "bg-white text-black shadow-lg" : "bg-black text-white"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Left side - Showrooms Dropdown */}
        <div className="w-1/3 flex items-center">
          <div className="relative group">
            <button
              className={`hover:text-gray-700 transition-colors ${
                navbarScrolled ? "text-black" : "text-white"
              }`}
            >
              Showrooms
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white text-black shadow-lg rounded-md p-4 min-w-[160px] transition-all duration-300 text-nowrap">
              <Link
                href="/showrooms/location1"
                className="px-4 py-2 hover:bg-gray-100 rounded-md"
              >
                Station Road
              </Link>
              <Link
                href="/showrooms/location2"
                className="px-4 py-2 hover:bg-gray-100 rounded-md"
              >
                Raebareli
              </Link>
            </div>
          </div>
        </div>

        {/* Center - Logo */}
        <a href="/" className="w-1/3 flex justify-center">
          <img
            src={navbarScrolled ? "/img/kia_logo.png" : "/img/kia_white.png"}
            className="h-10 w-auto transition-all duration-300"
            alt="Logo"
          />
        </a>

        {/* Right side - Navigation */}
        <div className="w-1/3 flex justify-end space-x-8 items-center">
          <Link
            href="/aboutus"
            className={`hover:text-gray-700 transition-colors ${
              navbarScrolled ? "text-black" : "text-white"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contactus"
            className={`hover:text-gray-700 transition-colors ${
              navbarScrolled ? "text-black" : "text-white"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
