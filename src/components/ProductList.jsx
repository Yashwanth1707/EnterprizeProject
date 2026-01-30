import React, { useMemo, useState, useEffect, useRef, memo } from "react";
import ContactForm from "./ContactForm";
import { products } from "../products"; // ✅ IMPORTANT

// ============================================================================
// HELPERS
// ============================================================================

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

const isCommercial = (p) => p.category === "solar-commercial";

// ============================================================================
// PRODUCT CARD COMPONENT
// ============================================================================

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
      <div className="relative overflow-hidden h-44 sm:h-48 md:h-52 bg-white  p-5 sm:p-4">
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

        {showSavings ? (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
            SAVE ₹{(product.originalPrice - product.price).toLocaleString("en-IN")}
          </div>
        ) : null}

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
        </div>

        <div className="flex items-center justify-between mb-4">
          {!isCommercial(product) ? (
            <div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              {product.originalPrice ? (
                <span className="text-sm text-gray-500 line-through ml-2">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              ) : null}
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

// ============================================================================
// COMMERCIAL CARD COMPONENT
// ============================================================================

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
        </div>

        {hasOptions ? (
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
        ) : null}

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

// ============================================================================
// PRODUCT LIST MAIN COMPONENT
// ============================================================================

export default function ProductList() {
  const mountedOnce = useRef(false);

  useEffect(() => {
    if (mountedOnce.current) {
      console.warn("ProductList mounted more than once. Check app root mounting and SSR hydration paths.");
    } else {
      mountedOnce.current = true;
    }
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const allNonCommercial = useMemo(() => products.filter((p) => p.category !== "solar-commercial"), []);
  const commercialOnly = useMemo(() => products.filter((p) => p.category === "solar-commercial"), []);

  const filteredProducts = useMemo(() => {
    const base =
      selectedCategory === "all"
        ? allNonCommercial
        : allNonCommercial.filter((p) => p.category === selectedCategory);

    return expanded ? base : base.slice(0, 9);
  }, [selectedCategory, expanded, allNonCommercial]);

  // lock scroll when modal open
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = selectedProduct || contactModalOpen ? "hidden" : "";
    return () => {
      root.style.overflow = prev;
    };
  }, [selectedProduct, contactModalOpen]);

  // close modal on ESC
  useEffect(() => {
    if (!selectedProduct) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProduct]);

  const onToggleExpandedKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setExpanded((v) => !v);
    }
  };

  const filters = [
    { key: "all", label: "🌟 All Products" },
    { key: "solar", label: "☀️ Supreme Solar" },
    { key: "chimney", label: "🏠 Supreme Chimneys" },
    { key: "purifier", label: "💧 Water Purifiers" },
    { key: "ups", label: "🔌 Luminous UPS" },
  ];

  return (
    <section id="products" className="py-14 sm:py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Premium Products
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
            Supreme solar solutions, kitchen chimneys, Kent & Aquaguard purifiers, and Luminous UPS — all optimized for
            Indian homes.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {filters.map((f) => (
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
        {commercialOnly.length > 0 ? (
          <section className="mt-14 sm:mt-16">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Commercial Solutions</h3>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mt-2">
                Large-scale water and hot water systems engineered for hotels, hostels, hospitals, industries, and
                commercial kitchens.
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
        ) : null}

        {/* Why Choose Us (unchanged) */}
        {/* ... keep your Why Choose Us section here as-is ... */}

        {/* Product Detail Modal */}
        {selectedProduct ? (
          <div
            className="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            onClick={() => setSelectedProduct(null)} // ✅ click overlay to close
          >
            <div
              className="relative bg-white rounded-t-2xl sm:rounded-2xl overflow-hidden w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // ✅ don't close when clicking inside modal
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-9 h-9 sm:w-10 sm:h-10 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-500 text-lg z-10 transition-colors"
                aria-label="Close"
              >
                ×
              </button>

              {/* Product Image */}
              <div className="relative h-52 sm:h-64 bg-white">
                <div className="w-full h-full p-5 sm:p-5">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className={`absolute inset-0 bg-gradient-to-t ${getCategoryColor(selectedProduct.category)} opacity-0`} />

                <div
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                    getCategoryBadge(selectedProduct.category).bg
                  }`}
                >
                  {getCategoryBadge(selectedProduct.category).icon} {getCategoryBadge(selectedProduct.category).label}
                </div>
              </div>

              {/* Product Details */}
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
                    <div className="text-xs sm:text-sm text-green-700">{getPrimarySpecLabel(selectedProduct.category)}</div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">{selectedProduct.warranty}</div>
                    <div className="text-xs sm:text-sm text-blue-700">Warranty</div>
                  </div>
                </div>

                {/* Features */}
                {Array.isArray(selectedProduct.features) && selectedProduct.features.length > 0 ? (
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Key Features</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      {selectedProduct.features.map((f) => (
                        <li key={f} className="text-sm sm:text-base">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* Specifications */}
                {selectedProduct.specs ? (
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Specifications</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {Object.entries(selectedProduct.specs).map(([k, v]) => (
                        <div key={k} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                          <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                            {k.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                          <div className="text-sm font-semibold text-gray-900 mt-1">{String(v)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/* FAQs */}
                {Array.isArray(selectedProduct.faqs) && selectedProduct.faqs.length > 0 ? (
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Frequently Asked Questions</h4>
                    <div className="space-y-3">
                      {selectedProduct.faqs.map((item, idx) => (
                        <details key={idx} className="border border-gray-200 rounded-lg group">
                          <summary className="flex items-center cursor-pointer p-4 hover:bg-gray-50">
                            <span className="font-semibold text-gray-900 text-sm sm:text-base">{item.q}</span>
                            <span className="ml-auto text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                          </summary>
                          <div className="px-4 pb-4 pt-0 text-gray-700 text-sm sm:text-base border-t">{item.a}</div>
                        </details>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/* Price + Actions */}
                <div className="border-t pt-5 sm:pt-6">
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    {selectedProduct.category !== "solar-commercial" ? (
                      <div>
                        <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                          ₹{selectedProduct.price.toLocaleString("en-IN")}
                        </span>
                        {selectedProduct.originalPrice ? (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            ₹{selectedProduct.originalPrice.toLocaleString("en-IN")}
                          </span>
                        ) : null}
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
                      className="flex-1 text-center px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 font-semibold"
                    >
                      📞 Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Contact Modal */}
        {contactModalOpen ? <ContactForm onClose={() => setContactModalOpen(false)} selectedProduct={selectedProduct} /> : null}
      </div>
    </section>
  );
}
