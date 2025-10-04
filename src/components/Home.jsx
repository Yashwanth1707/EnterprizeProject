import React from "react";
import { motion } from "framer-motion";

export default function HomeSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Balanced focus: Supreme Solar + Chimneys (no geysers)
  const features = [
    // Supreme Solar focus
    {
      icon: "🏷️",
      title: "Supreme Solar Brand",
      description:
        "Glass-lined inner tanks, robust exteriors, and high-absorption collectors for reliable hot water daily.",
      color: "from-blue-600 to-green-600",
    },
    {
      icon: "☀️",
      title: "ETC & FPC Choices",
      description:
        "Evacuated Tube or Flat Plate collectors engineered for Indian climates and consistent 65–85 °C output.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: "🧊",
      title: "50 mm PUF Insulation",
      description:
        "Thick insulation for extended heat retention so water stays hot longer with minimal losses.",
      color: "from-green-400 to-green-600",
    },
    // Chimneys focus
    {
      icon: "🏠",
      title: "High-Suction Chimneys",
      description:
        "Up to 1200–1600 m³/hr suction with auto-clean for smoke-free, fresh kitchens tailored to Indian cooking.",
      color: "from-slate-600 to-gray-900",
    },
    {
      icon: "🖐️",
      title: "Smart Controls",
      description:
        "Filterless/baffle options with gesture/touch control, LED lighting, and quiet, efficient motors.",
      color: "from-cyan-500 to-teal-600",
    },
    {
      icon: "🛠️",
      title: "Neat Install & Care",
      description:
        "Professional installation, clean routing, and responsive support for long-term efficiency and comfort.",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const stats = [
    { number: "100–500 LPD", label: "Solar Capacities", icon: "📦" },
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Brand & Company Line */}
        <div className="text-center mb-3">
          <motion.span
            className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent text-sm md:text-base font-semibold"
            variants={itemVariants}
          >
            Bhairava Enterprises • Solar & Kitchen Solutions
          </motion.span>
        </div>

        {/* Dual-focus Tagline */}
        <div className="text-center mb-2">
          <motion.span
            className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent text-lg font-semibold"
            variants={itemVariants}
          >
            🌟 Supreme Solar Water Heaters & Modern Kitchen Chimneys
          </motion.span>
        </div>

        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-center"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Comfort That Works Every Day
          </span>
          <br />
          <span className="text-gray-800">Solar Hot Water & Clean Kitchens</span>
        </motion.h1>

        {/* Overview: what and why */}
        <motion.p
          className="text-gray-700 max-w-4xl mx-auto mb-6 text-base md:text-lg leading-relaxed text-center"
          variants={itemVariants}
        >
          Bhairava Enterprises sells and installs Supreme Solar water heaters and high‑performance
          kitchen chimneys—solutions chosen to lower energy costs, keep homes fresh, and deliver
          long‑term comfort with dependable service.
        </motion.p>

        <motion.p
          className="text-gray-700 max-w-4xl mx-auto mb-10 text-xl md:text-2xl leading-relaxed text-center"
          variants={itemVariants}
        >
          From glass‑lined, PUF‑insulated solar systems to auto‑clean, high‑suction chimneys, every
          setup is specified, installed, and supported with care—so daily life stays efficient and easy.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={itemVariants}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 cursor-default"
              variants={cardVariants}
            >
              <div
                className={`bg-gradient-to-r ${feature.color} p-6 text-white rounded-xl mb-4`}
              >
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
          Supreme Solar systems span 100–500 LPD with ETC/FPC collectors and thick PUF insulation;
          chimney options feature auto‑clean, high‑suction designs for Indian kitchens.
        </p>
      </motion.div>
    </section>
  );
}
