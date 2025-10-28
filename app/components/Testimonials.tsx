"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonial = {
    name: "Reid Phillips",
    location: "Minturn, CO",
    review:
      "Matt was great to work with. Designed and built an amazing custom sauna that operates perfectly. The finishes are flawless and the craftsmanship is second to none.",
    response: "Thanks Reid, it was a pleasure working with you!",
    image: "/images/services-1.jpeg", // Replace with your real image
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-amber-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={testimonial.image}
              alt="Client Sauna Installation"
              className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </motion.div>

        {/* Right Side - Testimonial */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8">
            What Our <span className="text-amber-500">Clients Say</span>
          </h2>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500">
            <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
              “{testimonial.review}”
            </p>

            <div className="flex justify-center lg:justify-start mb-4 space-x-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <h4 className="font-semibold text-gray-800 text-xl">
              {testimonial.name}
            </h4>
            <p className="text-gray-500 mb-4">{testimonial.location}</p>

            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-amber-500">Luxury Saunas:</span>{" "}
                “{testimonial.response}”
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Soft background orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-40 -z-10"></div>
    </section>
  );
}
