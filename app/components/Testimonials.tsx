"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Spa Owner",
    photo: "/images/testimonial-1.jpeg",
    review:
      "Luxury Saunas transformed our spa experience. The design and quality are unmatched!",
  },
  {
    name: "Michael Lee",
    role: "Home Owner",
    photo: "/images/testimonial-2.jpeg",
    review:
      "The custom sauna we got is perfect for relaxation. Highly recommend Luxury Saunas!",
  },
  {
    name: "Emma Davis",
    role: "Resort Manager",
    photo: "/images/testimonial-1.jpeg",
    review:
      "Professional, timely, and luxurious. Our guests absolutely love the sauna installations.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-12">
          What Our <span className="text-amber-500">Clients Say</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <p className="text-gray-600 mb-4">&quot;{t.review}&quot;</p>
              <h4 className="font-semibold text-gray-800">{t.name}</h4>
              <p className="text-gray-400 text-sm">{t.role}</p>
              <div className="flex justify-center mt-2 space-x-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
