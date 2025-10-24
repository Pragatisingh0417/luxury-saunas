"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-20 bg-amber-500 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-4"
        >
          Subscribe to Our <span className="italic">Newsletter</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Get exclusive offers, updates, and wellness tips delivered directly to your inbox.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full text-gray-800 w-full md:flex-1 focus:outline-none"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-white text-amber-500 font-semibold hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
}
