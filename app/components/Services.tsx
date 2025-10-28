"use client";

import { motion } from "framer-motion";
import { FaSpa, FaCouch, FaLeaf, FaTools } from "react-icons/fa";

const services = [
  {
    icon: <FaSpa size={36} className="text-amber-600" />,
    title: "Custom Saunas",
    desc: "Tailored designs to perfectly fit your space, lifestyle, and aesthetic.",
  },
  {
    icon: <FaCouch size={36} className="text-amber-600" />,
    title: "Spa Installations",
    desc: "Luxury installations for homes, resorts, and wellness centers.",
  },
  {
    icon: <FaLeaf size={36} className="text-amber-600" />,
    title: "Eco-Friendly Technology",
    desc: "Energy-efficient systems built with sustainable materials and methods.",
  },
  {
    icon: <FaTools size={36} className="text-amber-600" />,
    title: "Maintenance & Support",
    desc: "Dependable service to keep your sauna performing beautifully over time.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-[#faf8f5]">
      <div className="max-w-8xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        >
          Our <span className="text-amber-600">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-16"
        >
          Luxury Saunas is dedicated to craftsmanship and precision from design
          to installation. Each sauna is built to elevate your wellness
          experience with meticulous attention to detail.
        </motion.p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-5">{s.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {s.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
