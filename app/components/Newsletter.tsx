"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white">
      {/* Animated Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]"
      />

      <div className="relative container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
        >
          Stay Updated with Our{" "}
          <span className="italic text-black">Newsletter</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 text-lg md:text-xl max-w-2xl mx-auto text-white/90"
        >
          Get <span className="font-semibold">exclusive offers</span>, the latest
          updates, and curated wellness tips delivered directly to your inbox.
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full text-gray-800 w-full md:flex-1 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all border  border-white"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-8 py-3 rounded-full bg-white text-amber-600 font-semibold hover:bg-gray-100 shadow-md transition-all"
          >
            Subscribe
          </motion.button>
        </motion.form>

        {/* Subtle Floating Sparkles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-1/2 w-3 h-3 bg-white rounded-full shadow-lg blur-sm"
        />
      </div>
    </section>
  );
}
