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
    <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-12">
      Our <span className="text-amber-500">Projects</span>
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mb-8">
      If you’re looking for a way to relax and disconnect from the world, you should definitely consider visiting Luxury Saunas. Their sauna is the perfect place to spend a few peaceful hours and leave feeling renewed and revitalized. Additionally, its location in Minturn, CO, makes it ideal for a weekend getaway or a day trip.  
    </p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden rounded-2xl shadow-md"
        >
          <Image
            src={p.src}
            alt={p.title}
            width={500}
            height={400}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <p className="text-white text-lg font-semibold">{p.title}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Centered Button */}
    <div className="mt-12 flex justify-center">
      <Link
        href="/projects"
        className="bg-amber-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-amber-600 transition"
      >
        View More
      </Link>
    </div>
  </div>
</section>

  );
}
