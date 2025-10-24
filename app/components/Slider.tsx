"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/img/about.JPEG", caption: "Experience Pure Relaxation" },
  { src: "/banner/banner2.jpg", caption: "Luxury Meets Wellness" },
  { src: "/banner/banner3.jpg", caption: "Redefine Your Comfort" },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt={images[index].caption}
            fill
            priority
            className="object-cover object-center"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Caption */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <motion.h2
              key={images[index].caption}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-4"
            >
              {images[index].caption}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 max-w-2xl"
            >
              Discover the art of relaxation and comfort at Luxury Saunas.
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-amber-500 w-5" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
