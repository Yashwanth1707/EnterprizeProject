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

  const features = [
    {
      icon: "☀️",
      title: "Energy Efficient",
      description:
        "Save up to 80% on electricity bills with our solar-powered heating solutions that harness natural sunlight.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: "💧",
      title: "High Capacity Range",
      description:
        "Choose from 100L, 200L, 300L and custom capacities to meet your family or business hot water needs.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "🛡️",
      title: "Durable & Reliable",
      description:
        "Premium materials with anti-corrosion coating and 10-year warranty for long-lasting performance.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: "🌍",
      title: "Eco-Friendly",
      description:
        "Reduce your carbon footprint with clean, renewable energy solutions that protect the environment.",
      color: "from-teal-400 to-teal-600",
    },
    {
      icon: "⚡",
      title: "Quick Installation",
      description:
        "Professional installation within 24 hours with minimal disruption to your daily routine.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description:
        "Low maintenance costs and government subsidies available. Pay back your investment in 2-3 years.",
      color: "from-pink-400 to-pink-600",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers", icon: "😊" },
    { number: "15+", label: "Years Experience", icon: "📅" },
    { number: "80%", label: "Energy Savings", icon: "⚡" },
    { number: "24/7", label: "Support Available", icon: "🔧" },
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
        {/* Hero */}
        <div className="text-center mb-20">
          <motion.div className="inline-block mb-6" variants={itemVariants}>
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent text-lg font-semibold">
              🌟 India's Leading Solar Water Heating Solutions
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Transform Your Home
            </span>
            <br />
            <span className="text-gray-800">with Smart Water Heating</span>
          </motion.h1>

          <motion.p
            className="text-gray-700 max-w-4xl mx-auto mb-10 text-xl md:text-2xl leading-relaxed"
            variants={itemVariants}
          >
            Discover our premium collection of solar water heaters and electric geysers designed to provide
            endless hot water while dramatically reducing your energy costs. Join thousands of satisfied
            customers who've made the smart switch to sustainable living.
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
              View Products
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
              href="tel:+919876543210"
              className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              📞 Get Free Quote
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20" variants={itemVariants}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
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
                <div className={`bg-gradient-to-r ${feature.color} p-6 text-white rounded-xl mb-4`}>
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
