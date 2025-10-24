"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);

  // Open popup after 2 seconds only on home page
  useEffect(() => {
    if (window.location.pathname === "/") {
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-[800px] overflow-hidden flex flex-col md:flex-row relative animate-fadeIn">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          ×
        </button>

        {/* Left image */}
        <div className="relative w-full md:w-1/2 h-48 md:h-auto">
          <Image
            src="/images/project-6.JPEG" 
            alt="Popup Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Right form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-amber-600 text-center md:text-left">
            Get in Touch
          </h2>

          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="border text-gray-800 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border text-gray-800 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows={3}
              className="border text-gray-800 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              type="submit"
              className="bg-amber-600 text-white py-2 rounded-md mt-2 hover:bg-blue-700 transition-all duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
