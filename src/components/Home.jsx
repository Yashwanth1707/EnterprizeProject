import React from "react";
import { motion } from "framer-motion";

export default function HomeSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.15, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const features = [
    {
      icon: "☀️",
      title: "Supreme Solar Heaters",
      description:
        "ETC and FPC systems with glass‑lined tanks and thick PUF insulation for reliable hot water.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: "🏠",
      title: "Supreme Kitchen Chimneys",
      description:
        "High‑suction 1200–1600 m³/hr, auto‑clean options, and quiet BLDC motors for fresh kitchens.",
      color: "from-slate-600 to-gray-900",
    },
    {
      icon: "🔌",
      title: "Luminous UPS/Inverters",
      description:
        "Pure sine wave and Li‑ion options for seamless backup and appliance‑safe power.",
      color: "from-violet-500 to-indigo-600",
    },
    {
      icon: "🎥",
      title: "CCTV Installation",
      description:
        "Neat, secure camera setups with mobile viewing, DVR/NVR, and reliable after‑sales support.",
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: "💧",
      title: "RO Water Purifiers",
      description:
        "Kent, Aquaguard, and Purocis RO+UV systems with mineral balance and smart alerts.",
      color: "from-teal-500 to-emerald-600",
    },
    {
      icon: "🛠️",
      title: "Expert Install & Care",
      description:
        "Site survey, professional installation, and responsive service to keep systems efficient.",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const stats = [
    { number: "100–3000 LPD", label: "Solar Capacities", icon: "📦" },
    { number: "50 mm", label: "PUF Insulation", icon: "🧊" },
    { number: "1200–1600", label: "m³/hr Suction", icon: "💨" },
    { number: "24/7", label: "After‑Sales Support", icon: "🔧" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000" />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Brand Emphasis */}
        <div className="text-center mb-2">
          <motion.span
            className="text-xs md:text-sm uppercase tracking-widest text-slate-500"
            variants={itemVariants}
          >
            Trusted since 2019
          </motion.span>
        </div>

        <div className="text-center mb-2">
          <motion.span
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent text-3xl md:text-4xl font-extrabold"
            variants={itemVariants}
          >
            Bhairava Enterprises
          </motion.span>
        </div>

        {/* New Headline + Tagline */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2 leading-snug text-center text-gray-900"
          variants={itemVariants}
        >
          Energy‑Smart Homes, Cleaner Kitchens
        </motion.h1>

        <motion.p
          className="text-gray-700 max-w-3xl mx-auto mt-3 text-lg md:text-xl leading-relaxed text-center"
          variants={itemVariants}
        >
          Supreme Solar heaters and chimneys, Luminous UPS power, CCTV security, and RO purification — planned, installed, and supported end‑to‑end.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mt-8 mb-14"
          variants={itemVariants}
        >
          <a
            href="#products"
            className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-8 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            Explore Products
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            href="tel:+918310280310"
            className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            📞 Get Free Site Survey
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={itemVariants}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.04 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6"
              variants={cardVariants}
            >
              <div className={`bg-gradient-to-r ${feature.color} p-6 text-white rounded-xl mb-4`}>
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brand-focused note */}
        <p className="mt-10 text-sm text-gray-500 text-center">
          Supreme Solar spans 100–3000 LPD with ETC/FPC collectors and 50 mm PUF insulation; chimneys feature auto‑clean and high‑suction designs for Indian kitchens. Luminous UPS protects appliances with stable, sine‑wave power.
        </p>
      </motion.div>
    </section>
  );
}
