"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About-Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact-Us", href: "/contact-us" },
  ];

  return (
    <nav className="bg-black text-gray-300 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <Link href="/">
          <img
            src="/banner/white log.png"
            alt="Logo"
            width={80}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-300 font-semibold">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                pathname === link.href
                  ? "bg-amber-500 text-white"
                  : "hover:bg-amber-100 hover:text-amber-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-5">
          {/* Book Now Button */}
          <Link
            href="/contact-us"
            className="bg-amber-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-amber-600 transition shadow-sm hover:shadow-md"
          >
            Book Now
          </Link>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            {[
              { icon: <FaFacebookF />, href: "https://facebook.com" },
              { icon: <FaInstagram />, href: "https://www.instagram.com/luxurysaunas/" },
              // { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
              // { icon: <FaYoutube />, href: "https://youtube.com" },
            ].map(({ icon, href }, idx) => (
              <Link
                key={idx}
                href={href}
                target="_blank"
                className="border border-amber-500 text-amber-500 rounded-full p-2 hover:bg-amber-600 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiOutlineX size={28} className="text-gray-300" />
            ) : (
              <HiOutlineMenu size={28} className="text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold px-3 py-2 rounded-md transition ${
                  pathname === link.href
                    ? "bg-amber-500 text-white"
                    : "text-gray-800 hover:bg-amber-100 hover:text-amber-600"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Book Now Button */}
            <Link
              href="/contact"
              className="bg-amber-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-amber-600 transition text-center"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>

            {/* Social Icons for Mobile */}
            <div className="flex justify-center space-x-5 pt-2 text-gray-600">
              {[
                { icon: <FaFacebookF />, href: "https://facebook.com" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/luxurysaunas/" },
                // { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
                // { icon: <FaYoutube />, href: "https://youtube.com" },
              ].map(({ icon, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  target="_blank"
                  className="border border-amber-500 text-amber-500 rounded-full p-2 hover:bg-amber-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
