"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const services = [
  {
    title: "Indoor Saunas",
    desc: "Experience the perfect blend of warmth and design with our handcrafted indoor saunas, made from the finest sustainable woods.",
    image: "/images/services-1.jpeg",
  },
  {
    title: "Outdoor Saunas",
    desc: "Create a personal retreat in your backyard with our beautifully designed outdoor saunas, built for durability and relaxation.",
    image: "/images/services-2.jpeg",
  },
  {
    title: "Infrared Saunas",
    desc: "Rejuvenate your body and mind with modern infrared saunas that provide deep-penetrating heat for superior wellness benefits.",
    image: "/images/services-3.jpeg",
  },
  {
    title: "Steam Rooms",
    desc: "Luxury steam solutions for spas, resorts, and homes. Enhance your space with the ultimate steam experience.",
    image: "/images/services-4.jpeg",
  },
  {
    title: "Custom Sauna Design",
    desc: "Our team works closely with you to create fully customized sauna experiences tailored to your aesthetic and functional needs.",
    image: "/images/services-5.jpeg",
  },
  {
    title: "Maintenance & Installation",
    desc: "Professional installation and reliable maintenance services to ensure your sauna operates perfectly for years.",
    image: "/images/services-1.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-[url('/banner/banner3.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white z-10 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Premium wellness solutions designed for luxury living and relaxation.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 container mx-auto px-6 md:px-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
          Explore Our <span className="text-amber-500">Sauna Products</span>
        </h2>
        

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="md:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 md:h-full"
                />
              </div>
              <div className="md:w-1/2 p-8 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-3 text-amber-500">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link
                  href="/contact-us"
                  className="inline-block bg-amber-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-amber-600 transition"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12">
            Why Choose <span className="text-amber-500">Our Saunas</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Premium-Grade Timber & Materials",
              "Eco-Friendly and Energy Efficient",
              "Custom Design & Installation Services",
              "Smart Temperature Control Systems",
              "Elegant Lighting & Interior Finish",
              "Long-Lasting Durability & Support",
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-3 bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
              >
                <FaCheckCircle className="text-amber-500 text-2xl" />
                <p className="text-gray-700 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-500 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-6"
        >
          Ready to Bring Luxury to Your Space?
        </motion.h2>
        <Link
          href="/contact-us"
          className="bg-white text-amber-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get a Quote
        </Link>
      </section>
    </main>
  );
}
