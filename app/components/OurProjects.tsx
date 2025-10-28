"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { src: "/images/project-1.JPEG", title: "Home Sauna Suite" },
  { src: "/images/project-2.JPEG", title: "Resort Wellness Spa" },
  { src: "/images/project-5.JPEG", title: "Luxury Fitness Sauna" },
  { src: "/images/project-4.JPEG", title: "Private Relaxation Cabin" },
];

export default function OurProjects() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-amber-50 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6"
        >
          Our <span className="text-amber-500">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-8"
        >
          Luxury Saunas has successfully completed over{" "}
          <span className="font-semibold text-gray-800">100+ premium sauna designs</span> 
          and installations. We offer a wide variety of wood species and continuously 
          expand our portfolio to meet new trends and homeowner preferences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed space-y-4 mb-12"
        >
          <p>
            <span className="font-semibold text-gray-800">Common materials:</span> Cedar,
            Hemlock, Spruce, Aspen, Magnolia, Alder, Ash, and Pine — including thermally
            modified woods.
          </p>
          <p>
            <span className="font-semibold text-gray-800">Add-ons include:</span> Ambient
            lighting, red light therapy, sound systems, Himalayan salt lights, and other
            bespoke wellness enhancements.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={p.src}
                alt={p.title}
                width={500}
                height={400}
                className="object-cover w-full h-72 md:h-80 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6">
                <p className="text-white text-xl font-semibold tracking-wide">
                  {p.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/projects"
            className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-amber-600 hover:shadow-xl transition-all duration-300"
          >
            View More Projects
          </Link>
        </motion.div>
      </div>

      {/* Decorative gradient blur background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-40 -z-10"></div>
    </section>
  );
}
