"use client";

import { motion } from "framer-motion";
import { Sparkles, Hammer, ClipboardList, PlugZap, Home } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: <ClipboardList className="w-8 h-8 text-amber-500" />,
      title: "1. Consultation & Site Visit",
      description:
        "Our design team begins with an initial phone consultation, followed by a detailed site visit to determine the best sauna location and feasibility for your home or commercial space.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-500" />,
      title: "2. Collaborative Design",
      description:
        "We collaborate closely with builders, homeowners, architects, and designers to create a custom sauna design tailored to your exact needs and aesthetic vision.",
    },
    {
      icon: <Hammer className="w-8 h-8 text-amber-500" />,
      title: "3. Material Selection & Approval",
      description:
        "After finalizing the design — including wood species, door and heater specifications, and add-ons — Luxury Saunas will order premium materials and prepare for installation.",
    },
    {
      icon: <PlugZap className="w-8 h-8 text-amber-500" />,
      title: "4. Electrical Coordination",
      description:
        "Electrical requirements are handled seamlessly by our certified electrician or coordinated directly with your team’s electrician to ensure all safety and code standards are met.",
    },
    {
      icon: <Home className="w-8 h-8 text-amber-500" />,
      title: "5. Expert Installation",
      description:
        "Our skilled craftsmen meticulously install all wood products, followed by precise setup of lighting, heater, controls, and custom add-ons as per your approved design.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-amber-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 mb-6"
        >
          Our <span className="text-amber-500">Process</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed mb-12"
        >
          From concept to completion, Luxury Saunas delivers an end-to-end experience
          defined by craftsmanship, communication, and precision.
        </motion.p>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-8 text-left flex flex-col items-start"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-40 -z-10"></div>
    </section>
  );
}
