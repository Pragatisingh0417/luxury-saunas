"use client";

import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

interface FloatingContactButtonsProps {
  phone?: string;
  countryCode?: string;
  whatsappMessage?: string;
}

const FloatingContactButtons: React.FC<FloatingContactButtonsProps> = ({
  phone = "7192462128",
  countryCode = "91",
  whatsappMessage = "Hi! I found your site and would like to chat.",
}) => {
  const whatsappNumber = `${countryCode}${phone.replace(/[^0-9]/g, "")}`;
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  const telHref = `tel:${phone.replace(/[^0-9+]/g, "")}`;

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp with ${phone}`}
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:scale-105 transform transition-all duration-150 bg-green-500 text-white"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Call Button */}
      <a
        href={telHref}
        aria-label={`Call ${phone}`}
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:scale-105 transform transition-all duration-150 bg-blue-500 text-white"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
};

export default FloatingContactButtons;