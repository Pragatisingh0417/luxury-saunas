"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-[url('/images/services-2.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white z-10 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We’d love to hear from you! Whether you’re planning your dream sauna or just exploring ideas, our team is here to help.
          </p>
        </motion.div>
      </section>

      {/* Contact Details + Form */}
      <section className="py-20 container mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Contact <span className="text-amber-500">Information</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Reach out to us directly or fill out the form to schedule a consultation with our wellness experts.
          </p>

          <div className="space-y-5">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-amber-500 text-2xl" />
              <span>301 Boulder St, Minturn, CO 81645, Estados Unidos.</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-amber-500 text-2xl" />
              <span>+1 7192462128</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-amber-500 text-2xl" />
              <span>info@luxurysaunas.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-amber-500 text-2xl" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6149.64265700004!2d-106.430361!3d39.586177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876a7b49a03df831%3A0x13fd623dae9c13d6!2sLuxury%20Saunas!5e0!3m2!1sen!2sus!4v1761291783913!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-2xl shadow-lg space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Send us a Message
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-2">Name</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-amber-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-amber-500 outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Phone</label>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-amber-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Message</label>
            <textarea
              rows={5}
              required
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-amber-500 outline-none transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-amber-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-amber-600 transition w-full md:w-auto"
          >
            Send Message
          </button>
        </motion.form>
      </section>

      {/* 👇 Our Team Section */}
      <section className="py-16 bg-gray-100 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-800"
        >
          Meet Our Team
        </motion.h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Here is our team from Luxury Saunas — passionate professionals dedicated to helping you design your dream wellness experience.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <Image
            src="/images/teams.jpg" 
                        alt="Luxury Saunas Team"
            width={200}
            height={300}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>
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
          Let’s Build Your Dream Sauna
        </motion.h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Get in touch today and transform your wellness experience with our custom sauna designs.
        </p>
        <a
          href="tel:+919876543210"
          className="bg-white text-amber-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Call Us Now
        </a>
      </section>
    </main>
  );
}
