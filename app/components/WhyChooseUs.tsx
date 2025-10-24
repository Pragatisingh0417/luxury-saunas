"use client";

import { motion } from "framer-motion";
import { FaSpa, FaCouch, FaLeaf } from "react-icons/fa";

const features = [
  {
    icon: <FaSpa size={40} className="text-amber-500" />,
    title: "Premium Quality",
    desc: "Crafted with the finest materials for unmatched durability and comfort.",
  },
  {
    icon: <FaCouch size={40} className="text-amber-500" />,
    title: "Modern Design",
    desc: "Elegant aesthetics that complement your space beautifully.",
  },
  {
    icon: <FaLeaf size={40} className="text-amber-500" />,
    title: "Eco-Friendly",
    desc: "Sustainable technology ensuring energy efficiency and safety.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-12">
          Why Choose <span className="text-amber-500">Us</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl shadow-md p-8 hover:shadow-xl transition"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
