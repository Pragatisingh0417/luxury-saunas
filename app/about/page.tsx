"use client";

import { motion } from "framer-motion";
import { FaAward, FaUsers, FaCouch, FaSpa } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
<section className="relative flex items-center justify-center bg-[url('/images/services-1.jpeg')] bg-cover bg-center h-[50vh] sm:h-[60vh] md:h-[80vh]">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative text-center text-white z-10 px-4 sm:px-6"
  >
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 sm:mb-4 leading-tight">
      About Us
    </h1>
    <p className="text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
      Discover Luxury Saunas — your destination for a premium, relaxing sauna experience.
    </p>
  </motion.div>
</section>


      {/* Company Overview */}
<section className="py-16 md:py-20 container mx-auto px-4 sm:px-8 md:px-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
    {/* Image Section */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <Image
        src="/banner/banner-4.JPEG"
        alt="Luxury Sauna Interior"
        width={600}
        height={400}
        className="rounded-2xl shadow-lg w-full max-w-[500px] sm:max-w-[600px] object-cover"
      />
    </motion.div>

    {/* Text Section */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center md:text-left"
    >
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
        Experience <span className="text-amber-500">Luxury & Relaxation</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base mb-4 md:mb-6">
        Luxury Saunas is dedicated to providing a unique sauna experience at 
        <strong> 301 Boulder St, Minturn, CO 81645, United States</strong>. Perfect for a peaceful getaway, our saunas are designed to help you relax, de-stress, and revitalize.
      </p>
      <p className="text-gray-600 text-sm sm:text-base mb-4 md:mb-6">
        Our team specializes in high-quality saunas and wellness solutions. Each sauna is known for its comfort, cleanliness, and relaxing atmosphere — a true haven for wellness enthusiasts.
      </p>
      <p className="text-gray-600 text-sm sm:text-base mb-6 md:mb-8">
        We pride ourselves on attention to detail and customer satisfaction. From ambient lighting to calming music, every element is carefully designed to provide an unforgettable luxury sauna experience.
      </p>
      <Link
        href="/contact-us"
        className="inline-block bg-amber-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-amber-600 transition"
      >
        Get in Touch
      </Link>
    </motion.div>
  </div>
</section>


      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
          Why <span className="text-amber-500">Choose Luxury Saunas</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <FaAward />, title: "Attention to Detail" },
            { icon: <FaUsers />, title: "Exceptional Customer Service" },
            { icon: <FaCouch />, title: "Comfortable & Clean Saunas" },
            { icon: <FaSpa />, title: "Relaxing & Rejuvenating Experience" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="text-4xl text-amber-500 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h4 className="font-semibold text-lg">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-6"
        >
          Ready to Experience a Luxury Sauna?
        </motion.h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Visit Luxury Saunas for a rejuvenating escape and discover the ultimate in relaxation and wellness.
        </p>
        <Link
          href="/contact-us"
          className="bg-white text-amber-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Us Today
        </Link>
      </section>
    </main>
  );
}
