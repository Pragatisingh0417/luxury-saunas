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
    <nav className="bg-black text-gray-300 fixed w-full z-50 shadow-md">
      <div className=" mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 py-3 md:py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/banner/white log.png"
            alt="Logo"
            width={90}
            height={40}
            className="object-contain w-20 sm:w-24 md:w-28"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-gray-300 font-semibold">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-2 rounded-full text-sm lg:text-base transition-all duration-200 ${
                pathname === link.href
                  ? "bg-amber-500 text-white"
                  : "hover:bg-amber-100 hover:text-amber-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {/* Book Now Button */}
          <Link
            href="/contact-us"
            className="bg-amber-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-amber-600 transition shadow-sm text-sm lg:text-base"
          >
            Book Now
          </Link>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-2 lg:space-x-3">
            {[
              { icon: <FaFacebookF />, href: "https://facebook.com" },
              { icon: <FaInstagram />, href: "https://instagram.com" },
              { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
              { icon: <FaYoutube />, href: "https://youtube.com" },
            ].map(({ icon, href }, idx) => (
              <Link
                key={idx}
                href={href}
                target="_blank"
                className="border border-amber-500 text-amber-500 rounded-full p-2 hover:bg-amber-600 hover:text-white transition-all duration-300 flex items-center justify-center text-sm"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu Toggle">
            {menuOpen ? (
              <HiOutlineX size={26} className="text-gray-300" />
            ) : (
              <HiOutlineMenu size={26} className="text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 py-4 space-y-3 sm:space-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-semibold px-3 py-2 rounded-md text-sm transition ${
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
            href="/contact-us"
            className="bg-amber-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-amber-600 transition text-center text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </Link>

          {/* Social Icons for Mobile */}
          <div className="flex justify-center space-x-4 pt-3 text-gray-600">
            {[
              { icon: <FaFacebookF />, href: "https://facebook.com" },
              { icon: <FaInstagram />, href: "https://instagram.com" },
              { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
              { icon: <FaYoutube />, href: "https://youtube.com" },
            ].map(({ icon, href }, idx) => (
              <Link
                key={idx}
                href={href}
                target="_blank"
                className="border border-amber-500 text-amber-500 rounded-full p-2 hover:bg-amber-600 hover:text-white transition-all duration-300 flex items-center justify-center text-sm"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
