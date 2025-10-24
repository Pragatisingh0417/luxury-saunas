"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Open popup after 2 seconds only on home page
  useEffect(() => {
    if (window.location.pathname === "/") {
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3">
      <div
        ref={popupRef}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-[800px] overflow-hidden flex flex-col md:flex-row relative animate-fadeIn"
      >
        {/* Close button with white background */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 bg-white text-gray-800 hover:bg-gray-100 shadow-md rounded-full w-8 h-8 flex items-center justify-center text-2xl font-bold z-50 transition-all"
          aria-label="Close popup"
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
              className="border text-gray-800 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border text-gray-800 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <textarea
              placeholder="Your Message"
              rows={3}
              className="border text-gray-800 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            ></textarea>

            <button
              type="submit"
              className="bg-amber-600 text-white py-2 rounded-md mt-2 hover:bg-amber-700 transition-all duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
