import React, { useMemo, useState, useEffect, useRef, memo } from "react";
import ContactForm from "./ContactForm";

// Helpers
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
    case "solar-commercial":
      return "from-amber-500 to-rose-600";
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
    case "solar-commercial":
      return { icon: "🏭", label: "Commercial", bg: "bg-amber-100 text-amber-800" };
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

// Data
export const products = [
  { id: 1, name: "Heavy Plus 110 LPD", category: "solar", price: 16000, warranty: "5 Years", efficiency: "ETC | 110 LPD", image: "/images/hpsolar1.jpg", description: "Compact ETC system for small families with quick morning heat-up and low upkeep.", features: ["Heavy Plus build", "Fast heating", "Weather resistant", "Low maintenance"] },
  { id: 2, name: "Heavy Plus 165 LPD", category: "solar", price: 21000, warranty: "5 Years", efficiency: "ETC | 165 LPD", image: "/images/hp165.png", description: "Balanced 165 LPD capacity ideal for 3–4 members with robust insulation and tubing.", features: ["Heavy Plus build", "Fast heating", "Weather resistant", "Low maintenance"] },
  { id: 3, name: "Heavy Plus 200 LPD", category: "solar", price: 24500, warranty: "5 Years", efficiency: "ETC | 200 LPD", image: "/images/hp200solar.webp", description: "Popular family-size ETC with reliable hot water across most seasons at low cost.", features: ["Heavy Plus build", "Fast heating", "Weather resistant", "Low maintenance"] },
  { id: 4, name: "Heavy Plus 220 LPD", category: "solar", price: 25500, warranty: "5 Years", efficiency: "ETC | 220 LPD", image: "/images/hp220.webp", description: "Extra headroom for larger households, keeping peak-hour demand comfortable.", features: ["Heavy Plus build", "Fast heating", "Weather resistant", "Low maintenance"] },
  { id: 5, name: "Heavy Plus 270 LPD", category: "solar", price: 31000, warranty: "5 Years", efficiency: "ETC | 270 LPD", image: "/images/hp270.jpeg", description: "Higher capacity system for duplexes or two bathrooms running in parallel.", features: ["Heavy Plus build", "Fast heating", "Weather resistant", "Low maintenance"] },
  { id: 6, name: "Heavy Plus 300 LPD", category: "solar", price: 38000, warranty: "5 Years", efficiency: "ETC | 300 LPD", image: "/images/hp300.jpeg", description: "300 LPD ETC with efficient heat retention for families with frequent usage.", features: ["Heavy Plus build", "Fast heating", "Weather resistant", "Low maintenance"] },
  { id: 7, name: "Heavy Plus 500 LPD", category: "solar", price: 53000, warranty: "5 Years", efficiency: "ETC | 500 LPD", image: "/images/hp500.jpeg", description: "Large-capacity ETC solution for villas and small commercial needs.", features: ["Heavy Plus build", "Fast heating", "Weather resistant", "Low maintenance"] },

  // Solar: FPC Non‑Pressurized
  { id: 8, name: "FPC Non-Press 220 LPD", category: "solar", price: 56000, warranty: "5 Years", efficiency: "FPC | 220 LPD", image: "/images/fpc-220.jpg", description: "Flat Plate Collector with durable absorber and stable performance in varied climates.", features: ["Non-pressurized FPC", "Durable absorber", "Insulated tank", "Stable performance"] },
  { id: 9, name: "FPC Non-Press 275 LPD", category: "solar", price: 61000, warranty: "5 Years", efficiency: "FPC | 275 LPD", image: "/images/fpc-275.jpg", description: "Higher non-pressurized FPC capacity with consistent delivery and low losses.", features: ["Non-pressurized FPC", "Durable absorber", "Insulated tank", "Stable performance"] },
  { id: 10, name: "FPC Non-Press 300 LPD", category: "solar", price: 73000, warranty: "5 Years", efficiency: "FPC | 300 LPD", image: "/images/fpc-300.jpg", description: "300 LPD FPC suited for frequent draw-offs and steady temperature output.", features: ["Non-pressurized FPC", "Durable absorber", "Insulated tank", "Stable performance"] },

  // Solar: FPC Pressurized
  { id: 11, name: "FPC Pressurized 220 LPD", category: "solar", price: 62000, warranty: "5 Years", efficiency: "FPC | 220 LPD | Pressurized", image: "/images/fpc-p-220.jpeg", description: "Pressurized FPC system for high line pressure homes and premium bath fittings.", features: ["Pressurized FPC", "High line pressure", "Durable tank", "Stable output"] },
  { id: 12, name: "FPC Pressurized 275 LPD", category: "solar", price: 71000, warranty: "5 Years", efficiency: "FPC | 275 LPD | Pressurized", image: "/images/275-FPC.jpg", description: "Balanced pressurized capacity supporting multi-bath usage without drop in flow.", features: ["Pressurized FPC", "High line pressure", "Durable tank", "Stable output"] },
  { id: 13, name: "FPC Pressurized 300 LPD", category: "solar", price: 82000, warranty: "5 Years", efficiency: "FPC | 300 LPD | Pressurized", image: "/images/fpc-p-300.jpg", description: "Top-tier pressurized FPC for rain showers and long pipelines with steady output.", features: ["Pressurized FPC", "High line pressure", "Durable tank", "Stable output"] },

  // Solar: Commercial
  { id: 14, name: "Commercial Solar Water Heater 3000 LPD", category: "solar-commercial", price: 335000, warranty: "5 Years", efficiency: "ETC/FPC | 3000 LPD", image: "/images/comm1.jpg", description: "High-volume system for hotels, hostels, hospitals and kitchens with engineered piping.", features: ["3000 LPD capacity", "Bulk hot water", "Rooftop installation", "Low maintenance", "Industrial build"] },

  // Heat Pump
  { id: 15, name: "Heat Pump Water Heater 200L", category: "solar", price: 68999, originalPrice: 74999, warranty: "2 Years", efficiency: "COP up to 3.4 | 200 L", image: "/images/heatpump.jpg", description: "All-weather air-source heat pump delivering up to 70% energy savings vs electric geysers.", features: ["Fast heating", "Low power usage", "Quiet operation", "Smart controls", "Eco-friendly refrigerant"] },

  // Purifiers
  { id: 16, name: "Aqua Grand RO", category: "purifier", price: 7000, warranty: "1 Year", efficiency: "RO | Household", image: "/images/AquagrandRO.jpg", description: "Budget RO for essential daily drinking needs with serviceable filters.", features: ["RO stages", "Carbon polishing", "Serviceable", "Compact"] },
  { id: 17, name: "Aqua Pearl RO", category: "purifier", price: 8500, warranty: "1 Year", efficiency: "RO | Household", image: "/images/Aqua-Pearl-RO.jpg", description: "Value RO with dependable purification and easy wall-mount design.", features: ["Core RO filtration", "Sediment+carbon", "Wall-mount ready", "Budget friendly"] },
  { id: 18, name: "Copper Pearl RO", category: "purifier", price: 9500, warranty: "1 Year", efficiency: "RO | Household", image: "/images/copperpearlro.jpg", description: "RO with copper enrichment for taste and hygiene focused households.", features: ["Copper enrichment", "Taste enhancer", "Filter alerts", "Sleek form"] },
  { id: 19, name: "Purosis RO", category: "purifier", price: 11500, warranty: "1 Year", efficiency: "RO | Household", image: "/images/purosisro.jpg", description: "Trusted RO brand with essential multi-stage filtration and reliable build.", features: ["Essential RO stages", "Reliable build", "Serviceable filters", "Compact body"] },
  { id: 20, name: "Innovica RO", category: "purifier", price: 12000, warranty: "1 Year", efficiency: "RO | Household", image: "/images/aqua innovacia.jpg", description: "Balanced RO for daily use with low TDS compatibility and easy maintenance.", features: ["RO+Carbon combo", "Low TDS compatible", "Easy maintenance", "Compact design"] },
  { id: 21, name: "Finpure RO", category: "purifier", price: 13000, warranty: "1 Year", efficiency: "RO | Household", image: "/images/finpure.png", description: "Premium RO with refined filtration, indicators and durable components.", features: ["Enhanced taste", "Durable components", "Alert indicators", "Easy service"] },
  { id: 22, name: "Aquaguard RO+UV+UF 7L", category: "purifier", price: 15499, originalPrice: 17499, warranty: "1 Year", efficiency: "7 L | 15 LPH", image: "/images/aquaguardro.webp", description: "Trusted multi-stage RO+UV+UF with taste enhancer for urban water conditions.", features: ["RO+UV+UF", "Taste enhancer", "Built-in pre-filter", "Smart alerts"] },
  { id: 23, name: "KENT Grand Plus RO+UV+UF+TDS 8L", category: "purifier", price: 16999, originalPrice: 19999, warranty: "1 Year", efficiency: "8 L | 20 LPH", image: "/images/kentro.jpg", description: "Advanced purification with TDS control, mineral retention and UV in-tank.", features: ["TDS Control", "Mineral retention", "UV in tank", "Low wastage design"] },
  { id: 24, name: "Dolphin RO", category: "purifier", price: 7500, warranty: "1 Year", efficiency: "RO | Household", image: "/images/dolphin.jpg", description: "Sturdy RO with robust housing and reliable output for small families.", features: ["Robust housing", "RO stages", "Service support", "Reliable output"] },

  // Chimneys
  { id: 25, name: "Supreme ECO H4 60 cm Auto‑Clean", category: "chimney", price: 12999, originalPrice: 15999, warranty: "1 Year", efficiency: "1200 m³/hr", image: "/images/chimney1.png", description: "Auto-clean wall-mount chimney with touch controls and bright LED lighting.", features: ["Auto-clean", "Touch controls", "Baffle filter", "LED lamps", "Low noise"] },
  { id: 26, name: "Supreme FIGO XL 90 cm Touch", category: "chimney", price: 17999, originalPrice: 20999, warranty: "1 Year", efficiency: "1400 m³/hr", image: "/images/chimney2.jpg", description: "Wide 90 cm canopy for heavy cooking with high suction and simple upkeep.", features: ["90 cm canopy", "High suction", "Touch panel", "Oil collector", "LEDs"] },
  { id: 27, name: "Supreme CROWN X 60 cm", category: "chimney", price: 14999, originalPrice: 17999, warranty: "1 Year", efficiency: "1100 m³/hr", image: "/images/chimney3.jpg", description: "Compact 60 cm chimney with efficient filtration and clean touch interface.", features: ["Space-saving", "Touch controls", "Baffle/Mesh filter", "Copper motor"] },

  // UPS
  { id: 28, name: "Luminous Zelio+ 1100 Pure Sine Wave", category: "ups", price: 10500, originalPrice: 11990, warranty: "24 Months", efficiency: "900 VA | 756 W", image: "/images/lum1.jpg", description: "Smart sine wave UPS with LCD, fast changeover and dependable backup timing.", features: ["Pure sine wave", "32‑bit DSP & LCD", "Eco/UPS modes", "MCB protection"] },
  { id: 29, name: "Luminous Eco Watt Neo 1050", category: "ups", price: 8550, originalPrice: 9990, warranty: "24 Months", efficiency: "900 VA | 756 W", image: "/images/lum2.jpg", description: "Reliable home UPS with intelligent charging and wide input handling.", features: ["Intelligent charging", "Square/Intelligent wave", "MCB protection", "Eco/UPS modes"] },
  { id: 30, name: "Luminous Li‑ON 1250 (In‑built Lithium)", category: "ups", price: 69990, originalPrice: 74990, warranty: "60 Months", efficiency: "1250 VA | Li‑ion", image: "/images/lum3.jpg", description: "Premium inverter with in-built Li-ion battery for compact, fast-charging backup.", features: ["In‑built Lithium", "Fast charging", "Pure sine wave", "Smart LCD", "Silent"] },

  // UPS: Integrated inverter + battery
  { id: 33, name: "Li‑ion Inverter + Battery 1.1 kVA", category: "ups", price: 38999, originalPrice: 44999, warranty: "60 Months", efficiency: "1100 VA | 880 W", image: "/images/inverter.jpg", description: "Compact pure sine wave inverter with in‑built 1280 Wh Li‑ion battery for zero‑maintenance backup, fast charging, and clean, silent operation.", features: ["In‑built Li‑ion (≈1280 Wh)", "Pure sine wave output", "Fast charge, low input ready", "LCD with backup/charge time", "Wall‑mount compact design", "Zero maintenance"] },

  // Commercial water solutions
  { id: 31, name: "Commercial Water Softener", category: "solar-commercial", price: 165000, warranty: "1 Year", efficiency: "Softener | 2000 LPH", image: "/images/softner.jpg", description: "Industrial-grade softener reducing hardness to protect plumbing and boilers.", features: ["Ion-exchange resin", "Auto/Manual regen", "High-flow valves", "FRP/SS vessel"] },
  { id: 32, name: "Commercial RO Plant", category: "solar-commercial", price: 245000, warranty: "1 Year", efficiency: "RO | LPH Variants", image: "/images/commercial-ro-plant-500x500.webp", description: "High-capacity RO with robust pre-treatment and TDS reduction for institutions.", features: ["Multi-stage filtration", "Low TDS output", "SS/FRP skids", "Inline monitoring"], lphOptions: ["25 LPH", "50 LPH", "100 LPH", "200 LPH", "500 LPH", "1000 LPH", "2000 LPH", "5000 LPH"] },
];

// Helper
const isCommercial = (p) => p.category === "solar-commercial";

// ProductCard
const ProductCard = memo(function ProductCard({ product, onSelect }) {
  const badge = getCategoryBadge(product.category);
  const showSavings = product.originalPrice && !isCommercial(product);
  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer hover:-translate-y-1.5"
      onClick={() => onSelect(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(product);
        }
      }}
      aria-label={`View details for ${product.name}`}
    >
      <div className="relative overflow-hidden h-44 sm:h-48 md:h-52 bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain object-center transition-transform duration-300"
          loading="lazy"
          decoding="async"
        />
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${badge.bg}`}>
          {badge.icon} {badge.label}
        </div>
        {showSavings && (
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

      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold text-green-600">{product.efficiency}</div>
            <div className="text-xs text-gray-500">{getPrimarySpecLabel(product.category)}</div>
          </div>
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold text-blue-600">{product.warranty}</div>
            <div className="text-xs text-gray-500">Warranty</div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          {!isCommercial(product) ? (
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
          ) : (
            <div className="text-sm text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-md">
              Contact for pricing
            </div>
          )}
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
});

// CommercialCard
const CommercialCard = memo(function CommercialCard({ product, onSelect, onQuote }) {
  const badge = getCategoryBadge(product.category);
  const hasOptions = Array.isArray(product.lphOptions) && product.lphOptions.length > 0;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1.5">
      <div className="relative overflow-hidden h-44 sm:h-48 md:h-52 bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain object-center"
          loading="lazy"
          decoding="async"
        />
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${badge.bg}`}>
          {badge.icon} {badge.label}
        </div>
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${getCategoryColor(
            product.category
          )} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />
      </div>

      <div className="p-5 sm:p-6">
        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold text-green-600">{product.efficiency}</div>
            <div className="text-xs text-gray-500">Specification</div>
          </div>
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold text-blue-600">{product.warranty}</div>
            <div className="text-xs text-gray-500">Warranty</div>
          </div>
        </div>

        {hasOptions && (
          <div className="mb-4" aria-label={`${product.name} LPH variants`}>
            <div className="flex flex-wrap gap-2">
              {product.lphOptions.map((opt) => (
                <span
                  key={opt}
                  className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-cyan-700 bg-cyan-50 border border-cyan-200"
                >
                  {opt}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Price intentionally omitted for commercial cards */}
        <div className="flex gap-3">
          <button
            onClick={() => onSelect(product)}
            className={`flex-1 bg-gradient-to-r ${getCategoryColor(
              product.category
            )} text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm`}
          >
            View Details
          </button>
          <button
            onClick={onQuote}
            className="flex-1 border-2 border-amber-300 text-amber-800 rounded-lg font-semibold py-2.5 sm:py-3 hover:bg-amber-50 transition-all duration-300 text-sm"
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
});

export default function ProductList() {
  // Detect unexpected double-mounts (for diagnostics; safe in prod)
  const mountedOnce = useRef(false);
  useEffect(() => {
    if (mountedOnce.current) {
      // eslint-disable-next-line no-console
      console.warn("ProductList mounted more than once. Check app root mounting and SSR hydration paths.");
    } else {
      mountedOnce.current = true;
    }
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Derived lists
  const allNonCommercial = useMemo(() => products.filter((p) => p.category !== "solar-commercial"), []);
  const commercialOnly = useMemo(() => products.filter((p) => p.category === "solar-commercial"), []);

  const filteredProducts = useMemo(() => {
    const base = selectedCategory === "all" ? allNonCommercial : allNonCommercial.filter((p) => p.category === selectedCategory);
    return expanded ? base : base.slice(0, 9);
  }, [selectedCategory, expanded, allNonCommercial]);

  // Prevent background scroll when any modal is open
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = selectedProduct || contactModalOpen ? "hidden" : "";
    return () => {
      root.style.overflow = prev;
    };
  }, [selectedProduct, contactModalOpen]);

  const onToggleExpandedKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setExpanded((v) => !v);
    }
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
                onClick={() => {
                  setSelectedCategory(f.key);
                  setExpanded(false);
                }}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  selectedCategory === f.key
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300"
                }`}
                aria-pressed={selectedCategory === f.key}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} />
          ))}
        </div>

        {/* Show more / less */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            onKeyDown={onToggleExpandedKey}
            aria-pressed={expanded}
            className={`px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r ${
              expanded ? "from-gray-700 to-gray-900" : "from-indigo-600 to-purple-600"
            } shadow hover:shadow-lg transition-all duration-300`}
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>

        {/* Commercial Section */}
        {commercialOnly.length > 0 && (
          <section className="mt-14 sm:mt-16">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Commercial Solutions</h3>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mt-2">
                Large‑scale water and hot water systems engineered for hotels, hostels, hospitals, industries, and commercial kitchens.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {commercialOnly.map((product) => (
                <CommercialCard
                  key={product.id}
                  product={product}
                  onSelect={setSelectedProduct}
                  onQuote={() => setContactModalOpen(true)}
                />
              ))}
            </div>
          </section>
        )}

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
          <div
            className="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
          >
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
                  loading="lazy"
                  decoding="async"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${getCategoryColor(selectedProduct.category)} opacity-0`} />
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${getCategoryBadge(selectedProduct.category).bg}`}>
                  {getCategoryBadge(selectedProduct.category).icon} {getCategoryBadge(selectedProduct.category).label}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 id="product-modal-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {selectedProduct.name}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg mb-5 sm:mb-6 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-xl sm:text-2xl font-bold text-green-600">{selectedProduct.efficiency}</div>
                    <div className="text-xs sm:text-sm text-green-700">
                      {selectedProduct.category === "chimney"
                        ? "Max Suction"
                        : selectedProduct.category === "purifier"
                        ? "Storage/Flow"
                        : "Capacity"}
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">{selectedProduct.warranty}</div>
                    <div className="text-xs sm:text-sm text-blue-700">Warranty Period</div>
                  </div>
                </div>

                {/* Price + Actions */}
                <div className="border-t pt-5 sm:pt-6">
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    {selectedProduct.category !== "solar-commercial" ? (
                      <div>
                        <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                          ₹{selectedProduct.price.toLocaleString()}
                        </span>
                        {selectedProduct.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            ₹{selectedProduct.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    ) : null}
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
