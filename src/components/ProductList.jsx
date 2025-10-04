import React, { useState } from "react";
import ContactForm from "./ContactForm"; // ✅ Import your ContactForm

// Catalog: Solar + Chimney + Water Purifiers
const products = [
  // Solar
  {
    id: 1,
    name: "Premium Solar Water Heater 200L",
    description:
      "High efficiency evacuated tube collector with 200L storage capacity. Perfect for medium-sized families.",
    price: 25999,
    originalPrice: 29999,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop",
    category: "solar",
    efficiency: "85%",
    warranty: "10 Years",
    features: [
      "Evacuated tube technology",
      "Corrosion-resistant tank",
      "10-year warranty",
      "Weather-resistant design",
      "Energy savings up to 80%",
    ],
  },
  {
    id: 2,
    name: "Compact Solar Water Heater 100L",
    description:
      "Space-saving design with 100L capacity. Ideal for small families and apartments.",
    price: 15999,
    originalPrice: 18999,
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500&h=300&fit=crop",
    category: "solar",
    efficiency: "80%",
    warranty: "8 Years",
    features: [
      "Compact design",
      "Easy installation",
      "8-year warranty",
      "Low maintenance",
      "Quick heating",
    ],
  },
  {
    id: 3,
    name: "Industrial Solar Water Heater 300L",
    description:
      "Large capacity system for commercial use and big families with 300L storage.",
    price: 34999,
    originalPrice: 39999,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
    category: "solar",
    efficiency: "90%",
    warranty: "12 Years",
    features: [
      "Commercial grade quality",
      "High efficiency collectors",
      "12-year warranty",
      "Automatic temperature control",
      "Maximum energy savings",
    ],
  },

  // Chimneys
  {
    id: 4,
    name: "60 cm Filterless Auto-Clean Chimney",
    description:
      "Sleek wall-mount chimney with filterless auto-clean, ideal for apartments and compact kitchens.",
    price: 13999,
    originalPrice: 16999,
    image:
      "https://images.unsplash.com/photo-1590779033100-9f60a05a0136?w=500&h=300&fit=crop",
    category: "chimney",
    efficiency: "1200 m³/hr",
    warranty: "5 Years",
    features: [
      "Filterless auto-clean",
      "Gesture & touch controls",
      "LED lighting",
      "Low noise BLDC motor",
      "Duct/ductless compatible",
    ],
  },
  {
    id: 5,
    name: "90 cm Baffle Filter Chimney",
    description:
      "Wide coverage chimney with baffle filter and powerful suction for heavy Indian cooking.",
    price: 18999,
    originalPrice: 21999,
    image:
      "https://images.unsplash.com/photo-1600585154340-1e5d3c0eac81?w=500&h=300&fit=crop",
    category: "chimney",
    efficiency: "1500 m³/hr",
    warranty: "7 Years",
    features: [
      "Baffle filter",
      "Thermal auto-clean",
      "Oil collector tray",
      "Feather-touch panel",
      "Uniform LED illumination",
    ],
  },
  {
    id: 6,
    name: "Island Chimney 90 cm Pro",
    description:
      "Premium island-mounted chimney with high suction and smart auto-clean for open kitchens.",
    price: 27999,
    originalPrice: 31999,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=300&fit=crop",
    category: "chimney",
    efficiency: "1600 m³/hr",
    warranty: "6 Years",
    features: [
      "Island mount design",
      "Heat auto-clean",
      "3-speed + boost",
      "Digital airflow indicator",
      "Quiet performance",
    ],
  },

  // Water Purifiers
  {
    id: 7,
    name: "RO+UV+UF+TDS Smart 7L",
    description:
      "Multi-stage purification with mineral retention and UV-in-tank for continuous protection.",
    price: 12999,
    originalPrice: 14999,
    image:
      "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=500&h=300&fit=crop",
    category: "purifier",
    efficiency: "7 L | 15 LPH",
    warranty: "1 Year",
    features: [
      "RO+UV+UF+TDS control",
      "UV LED in storage tank",
      "Mineral retention",
      "TDS up to 1500 ppm",
      "Wall-mount design",
    ],
  },
  {
    id: 8,
    name: "Copper+ Mineral RO 8L",
    description:
      "Adds copper infusion with advanced RO+UV+UF purification for great taste and health.",
    price: 15499,
    originalPrice: 18499,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=300&fit=crop",
    category: "purifier",
    efficiency: "8 L | 18 LPH",
    warranty: "2 Years",
    features: [
      "RO+UV+UF + Copper",
      "Smart TDS control",
      "Filter life indicator",
      "UV-in-tank hygiene",
      "Up to 2000 ppm TDS",
    ],
  },
  {
    id: 9,
    name: "Compact UV/UF Purifier 6L",
    description:
      "Energy-efficient UV/UF system for low TDS municipal water; sleek compact body.",
    price: 7999,
    originalPrice: 9999,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=300&fit=crop",
    category: "purifier",
    efficiency: "6 L | 12 LPH",
    warranty: "1 Year",
    features: [
      "UV sterilization",
      "UF membrane filtration",
      "No RO wastage",
      "Best for TDS < 200 ppm",
      "Low maintenance",
    ],
  },
];

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Category gradients: sunny solar, sleek chimney, aqua purifier
  const getCategoryColor = (category) => {
    switch (category) {
      case "solar":
        return "from-yellow-400 to-orange-500";
      case "chimney":
        return "from-slate-600 to-gray-900";
      case "purifier":
        return "from-teal-400 to-cyan-500";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  // Category badges
  const getCategoryBadge = (category) => {
    switch (category) {
      case "solar":
        return {
          icon: "☀️",
          label: "Solar",
          bg: "bg-yellow-100 text-yellow-800",
        };
      case "chimney":
        return {
          icon: "🏠",
          label: "Kitchen Chimney",
          bg: "bg-slate-100 text-slate-800",
        };
      case "purifier":
        return {
          icon: "💧",
          label: "Water Purifier",
          bg: "bg-teal-100 text-teal-800",
        };
      default:
        return {
          icon: "🛠️",
          label: "Product",
          bg: "bg-gray-100 text-gray-800",
        };
    }
  };

  // Helper to label the left spec box dynamically
  const getPrimarySpecLabel = (category) => {
    if (category === "chimney") return "Max Suction";
    if (category === "purifier") return "Storage/Flow";
    return "Efficiency";
  };

  return (
    <section
      id="products"
      className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore solar heaters, kitchen chimneys, and water purifiers designed for efficient, healthy, and sustainable homes.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-white text-gray-600 border-2 border-gray-200 hover:border-purple-300"
              }`}
            >
              🌟 All Products
            </button>
            <button
              onClick={() => setSelectedCategory("solar")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === "solar"
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-600 border-2 border-gray-200 hover:border-yellow-300"
              }`}
            >
              ☀️ Solar Heaters
            </button>
            <button
              onClick={() => setSelectedCategory("chimney")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === "chimney"
                  ? "bg-gradient-to-r from-slate-600 to-gray-900 text-white shadow-lg"
                  : "bg-white text-gray-600 border-2 border-gray-200 hover:border-slate-400"
              }`}
            >
              🏠 Kitchen Chimneys
            </button>
            <button
              onClick={() => setSelectedCategory("purifier")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === "purifier"
                  ? "bg-gradient-to-r from-teal-400 to-cyan-500 text-white shadow-lg"
                  : "bg-white text-gray-600 border-2 border-gray-200 hover:border-teal-300"
              }`}
            >
              💧 Water Purifiers
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const badge = getCategoryBadge(product.category);
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-semibold ${badge.bg}`}
                  >
                    {badge.icon} {badge.label}
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      SAVE ₹{product.originalPrice - product.price}
                    </div>
                  )}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${getCategoryColor(
                      product.category
                    )} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                    {/* Specs */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">
                          {product.efficiency}
                        </div>
                        <div className="text-xs text-gray-500">
                          {getPrimarySpecLabel(product.category)}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">
                          {product.warranty}
                        </div>
                        <div className="text-xs text-gray-500">Warranty</div>
                      </div>
                    </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    className={`w-full bg-gradient-to-r ${getCategoryColor(
                      product.category
                    )} text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="relative bg-white rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-500 text-xl z-10 transition-colors"
              >
                ×
              </button>

              <div className="relative h-64">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${getCategoryColor(
                    selectedProduct.category
                  )} opacity-20`}
                />
                <div
                  className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold ${
                    getCategoryBadge(selectedProduct.category).bg
                  }`}
                >
                  {getCategoryBadge(selectedProduct.category).icon}{" "}
                  {getCategoryBadge(selectedProduct.category).label}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedProduct.name}
                </h3>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {selectedProduct.efficiency}
                    </div>
                    <div className="text-sm text-green-700">
                      {selectedProduct.category === "chimney"
                        ? "Max Suction"
                        : selectedProduct.category === "purifier"
                        ? "Storage/Flow"
                        : "Efficiency Rating"}
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {selectedProduct.warranty}
                    </div>
                    <div className="text-sm text-blue-700">Warranty Period</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-700"
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price + Actions */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold text-gray-900">
                        ₹{selectedProduct.price.toLocaleString()}
                      </span>
                      {selectedProduct.originalPrice && (
                        <span className="text-lg text-gray-500 line-through ml-3">
                          ₹{selectedProduct.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {selectedProduct.originalPrice && (
                      <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Save ₹
                        {selectedProduct.originalPrice - selectedProduct.price}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setContactModalOpen(true);
                      }}
                      className={`flex-1 bg-gradient-to-r ${getCategoryColor(
                        selectedProduct.category
                      )} text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
                    >
                      Inquire Us
                    </button>

                    <a
                      href="tel:+919876543210"
                      className="flex-1 text-center px-6 py-4 border-2 border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
                    >
                      📞 Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Modal */}
        {contactModalOpen && (
          <ContactForm onClose={() => setContactModalOpen(false)} />
        )}
      </div>
    </section>
  );
}
