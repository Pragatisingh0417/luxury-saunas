"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left: Text Section */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6">
            About <span className="text-amber-500">Luxury Saunas</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            <strong>Luxury Saunas</strong>
 was started in 2018 in Minturn Colorado by Matt Hansen. We offer design construction, implementation and final fire up of all saunas. We specialize in high-end custom Sauna design and installation . We also offer installation of all types of outdoor saunas, including but not limited to barrels, cubes, a frames.           </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
Luxury saunas has extensive expertise in saunas, offering its clients a wide range of options to choose from. Our saunas are custom tailored to any space you have available inside or outside your home. 
          </p>
           {/* <p className="text-gray-600 text-lg leading-relaxed mb-8">
The contact phone number for Luxury Saunas is currently not available, 
but they can be reached through their website: luxurysaunas.co.          </p> */}
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-amber-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-amber-600 transition"
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Right: Image Section */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 relative w-full h-[400px] md:h-[500px]"
        >
          <Image
            src="/img/about.JPEG"
            alt="Luxury Sauna Interior"
            fill
            className="object-cover rounded-2xl shadow-xl"
          />
          {/* Decorative Overlay */}
          <div className="absolute inset-0 bg-gradient-to from-black/20 via-transparent rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
