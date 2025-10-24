"use client";

import { motion } from "framer-motion";
import { FaSpa, FaCouch, FaLeaf, FaTools } from "react-icons/fa";

const services = [
  {
    icon: <FaSpa size={40} className="text-amber-500" />,
    title: "Custom Saunas",
    desc: "Tailored designs to perfectly fit your space and lifestyle.",
  },
  {
    icon: <FaCouch size={40} className="text-amber-500" />,
    title: "Spa Installations",
    desc: "Luxury spa solutions for resorts, gyms, and wellness centers.",
  },
  {
    icon: <FaLeaf size={40} className="text-amber-500" />,
    title: "Eco-Friendly Technology",
    desc: "Sustainable and energy-efficient systems for modern wellness.",
  },
  {
    icon: <FaTools size={40} className="text-amber-500" />,
    title: "Maintenance & Support",
    desc: "Reliable service to keep your sauna in perfect condition.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-12">
          Our <span className="text-amber-500">Services</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
Luxury Saunas takes pride in its attention to detail and commitment to customer satisfaction. The sauna is equipped with the latest features and provides a relaxing and revitalizing experience that you won’t find anywhere else. From the soft lighting to the soothing music, every detail has been carefully planned to ensure an unforgettable sauna experience. 
         </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
If you’re looking for a way to relax and disconnect from the world, you should definitely consider visiting Luxury Saunas. Their sauna is the perfect place to spend a few peaceful hours and leave feeling renewed and revitalized. Additionally, its location in Minturn, CO, makes it ideal for a weekend getaway or a day trip.  
       </p>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4 flex justify-center">{s.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
