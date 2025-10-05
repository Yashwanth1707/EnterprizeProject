import React, { useState } from "react";
import ContactForm from "./ContactForm";


// Products: Supreme (solar/chimney) + Purifiers (Kent/Aquaguard/Purocis) + Luminous (UPS) + Commercial Solar + Heat Pump
const products = [
  // Supreme — Solar (ETC/FPC/GL ETC)
  {
    id: 1,
    name: "Supreme Solar GL ETC 200 LPD",
    description:
      "Glass‑lined ETC tank for high hardness water; hygienic and durable hot water for homes.",
    price: 24999,
    originalPrice: 28999,
    image: "/images/solae11.jpg",
    category: "solar",
    efficiency: "ETC | 200 LPD",
    warranty: "5 Years",
    features: [
      "Glass‑lined inner tank",
      "Hard water tolerance",
      "Fast heat absorption",
      "Weather resistant",
      "Low maintenance",
    ],
  },
  {
    id: 2,
    name: "Supreme Solar FPC 250 LPD",
    description:
      "Flat Plate Collector system ideal for apartments and continuous hot water needs.",
    price: 32999,
    originalPrice: 36999,
    image: "/images/200-to-500-LPD-fpc-system-SAME-PICTURE-3.jpg",
    category: "solar",
    efficiency: "FPC | 250 LPD",
    warranty: "5 Years",
    features: [
      "Flat Plate Collector",
      "Stable performance in cold",
      "Durable absorber plate",
      "Insulated tank",
      "Apartment friendly",
    ],
  },
  {
    id: 3,
    name: "Supreme Solar ETC 300 LPD",
    description:
      "High capacity ETC system for large families or light commercial usage.",
    price: 37999,
    originalPrice: 41999,
    image: "/images/ssolar33.jpeg",
    category: "solar",
    efficiency: "ETC | 300 LPD",
    warranty: "5 Years",
    features: [
      "High efficiency tubes",
      "Quick heat gain",
      "Rugged build",
      "Scalable capacity",
      "Energy saving",
    ],
  },

  // NEW — Commercial Solar 3000 LPD
  {
    id: 13,
    name: "Commercial Solar Water Heater 3000 LPD",
    description:
      "Large‑scale solar hot water system for hotels, hostels, hospitals and commercial kitchens.",
    price: 335000,
    originalPrice: 359000,
    image: "/images/comm1.jpg",
    category: "solar",
    efficiency: "ETC/FPC | 3000 LPD",
    warranty: "5 Years",
    features: [
      "High volume 3000 LPD capacity",
      "Energy‑saving bulk hot water",
      "Rooftop installation",
      "Low maintenance design",
      "Durable industrial build",
    ],
  },

  // NEW — Heat Pump Water Heater
  {
    id: 14,
    name: "Heat Pump Water Heater 200L",
    description:
      "High‑efficiency air‑source heat pump with up to 70% energy savings over electric geysers.",
    price: 68999,
    originalPrice: 74999,
    image: "/images/heatpump.jpg",
    category: "solar",
    efficiency: "COP up to 3.4 | 200 L",
    warranty: "2 Years",
    features: [
      "All‑weather performance",
      "Fast heating with low power",
      "Quiet operation",
      "Smart controls available",
      "Eco‑friendly refrigerant",
    ],
  },

  // Supreme — Kitchen Chimneys
  {
    id: 4,
    name: "Supreme ECO H4 60 cm Auto‑Clean",
    description:
      "Wall‑mount auto‑clean chimney with touch panel, strong suction and LED lighting.",
    price: 12999,
    originalPrice: 15999,
    image: "/images/chimney1.png",
    category: "chimney",
    efficiency: "1200 m³/hr",
    warranty: "1 Year",
    features: [
      "Auto‑clean function",
      "Touch controls",
      "Baffle filter",
      "LED lamps",
      "Low noise motor",
    ],
  },
  {
    id: 5,
    name: "Supreme FIGO XL 90 cm Touch",
    description:
      "90 cm wide coverage chimney for heavy cooking with strong suction and easy maintenance.",
    price: 17999,
    originalPrice: 20999,
    image: "/images/chimney2.jpg",
    category: "chimney",
    efficiency: "1400 m³/hr",
    warranty: "1 Year",
    features: [
      "Wide 90 cm canopy",
      "High suction power",
      "Touch panel",
      "Oil collector",
      "LED illumination",
    ],
  },
  {
    id: 6,
    name: "Supreme CROWN X 60 cm",
    description:
      "Compact 60 cm chimney with efficient filtration and simple touch operation.",
    price: 14999,
    originalPrice: 17999,
    image: "/images/chimney3.jpg",
    category: "chimney",
    efficiency: "1100 m³/hr",
    warranty: "1 Year",
    features: [
      "Space‑saving size",
      "Touch controls",
      "Baffle/Mesh filter",
      "Copper motor",
      "Stainless housing",
    ],
  },

  // REPLACED — Water Purifiers: Kent, Aquaguard, Purocis
  {
    id: 7,
    name: "KENT Grand Plus RO+UV+UF+TDS 8L",
    description:
      "Multiple purification with TDS control, UV in‑tank, and mineral retention for great taste.",
    price: 16999,
    originalPrice: 19999,
    image: "/images/kentro.jpg",
    category: "purifier",
    efficiency: "8 L | 20 LPH",
    warranty: "1 Year",
    features: [
      "RO+UV+UF+TDS Control",
      "Mineral retention",
      "UV LED in tank",
      "Zero water wastage design",
      "Wall‑mount body",
    ],
  },
  {
    id: 8,
    name: "Aquaguard RO+UV+UF 7L",
    description:
      "Trusted RO + UV purification with taste enhancer and compact wall‑mount design.",
    price: 15499,
    originalPrice: 17499,
    image: "/images/aquaguardro.webp",
    category: "purifier",
    efficiency: "7 L | 15 LPH",
    warranty: "1 Year",
    features: [
      "RO+UV+UF stages",
      "Taste enhancer",
      "Built‑in pre‑filter",
      "Smart alerts",
      "Urban water ready",
    ],
  },
  {
    id: 9,
    name: "Purocis RO+UV 8L",
    description:
      "Efficient RO+UV system with advanced filtration and reliable daily performance.",
    price: 11999,
    originalPrice: 13999,
    image: "/images/purosisro.jpg",
    category: "purifier",
    efficiency: "8 L | 18 LPH",
    warranty: "1 Year",
    features: [
      "RO+UV combo",
      "Sediment + carbon stages",
      "Low TDS compatibility",
      "Serviceable filters",
      "Compact body",
    ],
  },

  // Luminous — UPS/Inverters
  {
    id: 10,
    name: "Luminous Zelio+ 1100 Pure Sine Wave",
    description:
      "Smart Home UPS with 32‑bit DSP, fast changeover and LCD showing backup/charge time.",
    price: 10500,
    originalPrice: 11990,
    image: "/images/lum1.jpg",
    category: "ups",
    efficiency: "900 VA | 756 W",
    warranty: "24 Months",
    features: [
      "Pure sine wave",
      "32‑bit DSP & LCD",
      "Eco/UPS modes",
      "12V single battery",
      "Overload protection",
    ],
  },
  {
    id: 11,
    name: "Luminous Eco Watt Neo 1050",
    description:
      "Reliable home UPS with intelligent charging and wide input voltage handling.",
    price: 8550,
    originalPrice: 9990,
    image: "/images/lum2.jpg",
    category: "ups",
    efficiency: "900 VA | 756 W",
    warranty: "24 Months",
    features: [
      "Intelligent charging",
      "Square/Intelligent wave",
      "12V single battery",
      "MCB protection",
      "Eco/UPS modes",
    ],
  },
  {
    id: 12,
    name: "Luminous Li‑ON 1250 (In‑built Lithium)",
    description:
      "Premium sine wave inverter with in‑built Li‑ion battery for fast charging and compact size.",
    price: 69990,
    originalPrice: 74990,
    image: "/images/lum3.jpg",
    category: "ups",
    efficiency: "1250 VA | Li‑ion",
    warranty: "60 Months",
    features: [
      "In‑built Lithium battery",
      "Fast charging",
      "Pure sine wave",
      "Smart LCD",
      "Silent operation",
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

  // Category gradients: sunny solar, sleek chimney, aqua purifier, electric UPS
  const getCategoryColor = (category) => {
    switch (category) {
      case "solar":
        return "from-yellow-400 to-orange-600";
      case "chimney":
        return "from-slate-700 to-gray-900";
      case "purifier":
        return "from-teal-400 to-cyan-600";
      case "ups":
        return "from-violet-500 to-indigo-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  const getCategoryBadge = (category) => {
    switch (category) {
      case "solar":
        return { icon: "☀️", label: "Supreme Solar", bg: "bg-yellow-100 text-yellow-800" };
      case "chimney":
        return { icon: "🏠", label: "Supreme Chimney", bg: "bg-slate-100 text-slate-800" };
      case "purifier":
        return { icon: "💧", label: "Water Purifier", bg: "bg-teal-100 text-teal-800" };
      case "ups":
        return { icon: "🔌", label: "Luminous UPS", bg: "bg-violet-100 text-violet-800" };
      default:
        return { icon: "🛠️", label: "Product", bg: "bg-gray-100 text-gray-800" };
    }
  };

  const getPrimarySpecLabel = (category) => {
    if (category === "chimney") return "Max Suction";
    if (category === "purifier") return "Storage/Flow";
    if (category === "ups") return "Capacity";
    return "Capacity";
  };

  return (
    <section id="products" className="py-14 sm:py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Premium Products
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
            Supreme solar solutions, kitchen chimneys, Kent & Aquaguard purifiers, and Luminous UPS — all optimized for Indian homes.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              { key: "all", label: "🌟 All Products" },
              { key: "solar", label: "☀️ Supreme Solar" },
              { key: "chimney", label: "🏠 Supreme Chimneys" },
              { key: "purifier", label: "💧 Water Purifiers" },
              { key: "ups", label: "🔌 Luminous UPS" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setSelectedCategory(f.key)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  selectedCategory === f.key
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const badge = getCategoryBadge(product.category);
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer hover:-translate-y-1.5"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Image wrapper ensures full visibility without crop/zoom */}
                <div className="relative overflow-hidden h-44 sm:h-48 md:h-52 bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain object-center transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${badge.bg}`}>
                    {badge.icon} {badge.label}
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                      SAVE ₹{product.originalPrice - product.price}
                    </div>
                  )}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${getCategoryColor(
                      product.category
                    )} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                </div>

                {/* Info */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-center">
                      <div className="text-base sm:text-lg font-bold text-green-600">
                        {product.efficiency}
                      </div>
                      <div className="text-xs text-gray-500">
                        {getPrimarySpecLabel(product.category)}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-base sm:text-lg font-bold text-blue-600">
                        {product.warranty}
                      </div>
                      <div className="text-xs text-gray-500">Warranty</div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xl sm:text-2xl font-bold text-gray-900">
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
                    )} text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <section className="mt-14 sm:mt-16">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-[1px]">
            <div className="rounded-3xl bg-white">
              <div className="px-5 sm:px-8 py-8 sm:py-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-6">
                  Why Choose Bhairava
                </h3>
                <p className="text-gray-600 text-sm sm:text-base text-center max-w-3xl mx-auto mb-8">
                  Supreme build quality and service‑first support with trusted Luminous power backup and leading purifier brands.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div className="rounded-2xl p-5 bg-gradient-to-br from-green-50 to-emerald-100 border border-emerald-200">
                    <div className="text-2xl">⚡</div>
                    <h4 className="mt-2 font-bold text-gray-900">Energy Savings</h4>
                    <p className="text-gray-700 text-sm mt-1">High‑efficiency systems optimized for Indian conditions.</p>
                  </div>
                  <div className="rounded-2xl p-5 bg-gradient-to-br from-blue-50 to-cyan-100 border border-cyan-200">
                    <div className="text-2xl">🛡️</div>
                    <h4 className="mt-2 font-bold text-gray-900">Solid Warranty</h4>
                    <p className="text-gray-700 text-sm mt-1">Coverage on tanks, motors and electronics with easy claims.</p>
                  </div>
                  <div className="rounded-2xl p-5 bg-gradient-to-br from-amber-50 to-orange-100 border border-orange-200">
                    <div className="text-2xl">👨‍🔧</div>
                    <h4 className="mt-2 font-bold text-gray-900">Pro Installation</h4>
                    <p className="text-gray-700 text-sm mt-1">Neat, safe installs by trained technicians with site checks.</p>
                  </div>
                  <div className="rounded-2xl p-5 bg-gradient-to-br from-fuchsia-50 to-pink-100 border border-pink-200">
                    <div className="text-2xl">📞</div>
                    <h4 className="mt-2 font-bold text-gray-900">Fast Support</h4>
                    <p className="text-gray-700 text-sm mt-1">WhatsApp‑friendly support, calls, and scheduled visits.</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="px-5 sm:px-7 py-3 rounded-xl bg-white text-indigo-700 font-semibold shadow hover:shadow-md border border-indigo-200"
                  >
                    Get a Free Quote
                  </button>
                  <a
                    href="tel:+918310280310"
                    className="px-5 sm:px-7 py-3 rounded-xl bg-indigo-700 text-white font-semibold shadow hover:shadow-md text-center"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4 backdrop-blur-sm">
            <div className="relative bg-white rounded-t-2xl sm:rounded-2xl overflow-hidden w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-9 h-9 sm:w-10 sm:h-10 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-500 text-lg z-10 transition-colors"
                aria-label="Close"
              >
                ×
              </button>

              <div className="relative h-52 sm:h-64 bg-white">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain object-center"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${getCategoryColor(
                    selectedProduct.category
                  )} opacity-0`}
                />
                <div
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                    getCategoryBadge(selectedProduct.category).bg
                  }`}
                >
                  {getCategoryBadge(selectedProduct.category).icon} {getCategoryBadge(selectedProduct.category).label}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {selectedProduct.name}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg mb-5 sm:mb-6 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-xl sm:text-2xl font-bold text-green-600">
                      {selectedProduct.efficiency}
                    </div>
                    <div className="text-xs sm:text-sm text-green-700">
                      {selectedProduct.category === "chimney"
                        ? "Max Suction"
                        : selectedProduct.category === "purifier"
                        ? "Storage/Flow"
                        : "Capacity"}
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">
                      {selectedProduct.warranty}
                    </div>
                    <div className="text-xs sm:text-sm text-blue-700">Warranty Period</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-5 sm:mb-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm sm:text-base">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price + Actions */}
                <div className="border-t pt-5 sm:pt-6">
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div>
                      <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                        ₹{selectedProduct.price.toLocaleString()}
                      </span>
                      {selectedProduct.originalPrice && (
                        <span className="text-sm sm:text-lg text-gray-500 line-through ml-2 sm:ml-3">
                          ₹{selectedProduct.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {selectedProduct.originalPrice && (
                      <div className="bg-red-100 text-red-800 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                        Save ₹{selectedProduct.originalPrice - selectedProduct.price}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      onClick={() => setContactModalOpen(true)}
                      className={`flex-1 bg-gradient-to-r ${getCategoryColor(
                        selectedProduct.category
                      )} text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-center`}
                    >
                      Inquire Us
                    </button>
                    <a
                      href="tel:+918310280310"
                      className="flex-1 text-center px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
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
        {contactModalOpen && <ContactForm onClose={() => setContactModalOpen(false)} />}
      </div>
    </section>
  );
}
