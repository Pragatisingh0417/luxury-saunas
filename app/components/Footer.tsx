"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-14">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo + About */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Luxury<span className="text-amber-500">Saunas</span>
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Luxury Saunas takes pride in its attention to detail and commitment
            to customer satisfaction. Our saunas are crafted with the finest
            materials and cutting-edge technology to provide a truly
            revitalizing experience. From the soft lighting to the soothing
            atmosphere, every element is designed for your relaxation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Projects", href: "/projects" },
              { name: "Contact", href: "/contact-us" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="font-semibold hover:text-amber-500 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-5">Get In Touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-amber-500 text-xl mt-1" />
              <span>
                301 Boulder street  #1522 minturn, CO 81645
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-amber-500 text-xl" />
              <span>+1  7192462128</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-amber-500 text-xl" />
              <span>info@luxurysaunas.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaClock className="text-amber-500 text-xl" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-5">Follow Us</h4>
          <div className="flex space-x-4">
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
                className="border border-amber-500 text-amber-500 rounded-full p-3 hover:bg-amber-600 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Luxury Saunas. All rights reserved.
      </div>
    </footer>
  );
}
