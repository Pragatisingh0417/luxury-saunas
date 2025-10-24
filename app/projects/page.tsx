"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

// Example product data (you can expand easily)
const products = [
  {
    name: "Luxury Indoor Sauna",
    desc: "Crafted from high-quality cedar wood, designed for elegance and comfort in any home interior.",
    image: "/images/project-1.JPEG",
    video: "/videos/video-1.MOV",
  },
  {
    name: "Outdoor Barrel Sauna",
    desc: "An architectural masterpiece for your backyard — modern design, pure relaxation.",
    image: "/images/project-2.JPEG",
    video: "/videos/video-2.MOV",
  },
  {
    name: "Infrared Sauna Cabin",
    desc: "Revolutionary infrared heating technology that rejuvenates your body from the inside out.",
    image: "/images/project-4.JPEG",
    video: "/videos/video-3.mp4",
  },
  {
    name: "Steam Room Deluxe",
    desc: "Experience the healing power of steam in our beautifully designed luxury steam rooms.",
    image: "/images/project-5.JPEG",
    video: "/videos/video-4.MOV",
  },
  {
    name: "Custom Sauna Design",
    desc: "Tailor-made saunas built to your specifications, aesthetics, and wellness goals.",
    image: "/images/project-6.JPEG",
    video: "/videos/video-5.MOV",
  },
  {
    name: "Sauna Accessories",
    desc: "Premium accessories including heaters, lighting, control panels, and aroma diffusers.",
    image: "/images/services-4.jpeg",
    video: "/videos/video-6.MOV",
  },
  {
    name: "Sauna Accessories",
    desc: "Premium accessories including heaters, lighting, control panels, and aroma diffusers.",
    image: "/images/services-3.jpeg",
    video: "/videos/video-7.MOV",
  },
  {
    name: "Sauna Accessories",
    desc: "Premium accessories including heaters, lighting, control panels, and aroma diffusers.",
    image: "/images/services-2.jpeg",
    video: "/videos/video-8.mp4",
  },
];

export default function Projects() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-[url('/images/services-3.JPEG')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white z-10 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Our Sauna Collection
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Explore the finest collection of saunas and wellness products built for ultimate luxury.
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="py-20 container mx-auto px-6 md:px-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
          Our <span className="text-amber-500">Signature Products</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={500}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                {/* <Link
                  href={p.video}
                  target="_blank"
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition"
                >
                  <FaPlayCircle className="text-white text-5xl" />
                </Link> */}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-amber-600 mb-3">
                  {p.name}
                </h3>
                <p className="text-gray-600 mb-4">{p.desc}</p>
                <Link
                  href="/contact-us"
                  className="inline-block bg-amber-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-amber-600 transition"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12">
            Product <span className="text-amber-500">Video Showcase</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition"
              >
                <video
                  src={p.video}
                  controls
                  muted
                  className="w-full h-64 object-cover"
                />
                {/* <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-700">
                    {p.name}
                  </h3>
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-6"
        >
          Interested in a Custom Sauna Project?
        </motion.h2>
        <Link
          href="/contact-us"
          className="bg-white text-amber-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Our Team
        </Link>
      </section>
    </main>
  );
}
