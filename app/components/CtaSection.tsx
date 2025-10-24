"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative bg-amber-500 py-20 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Ready to Experience <span className="italic">True Luxury?</span>
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Get in touch with our team today and bring home the warmth, comfort, 
          and elegance of a custom-built sauna experience.
        </p>
        <Link
          href="/contact"
          className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Get a Quote
        </Link>
      </motion.div>
    </section>
  );
}
