import React, { useMemo, useState, useEffect, useRef, memo } from "react";
import ContactForm from "./ContactForm";

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

// ============================================================================
// PRODUCTS DATA WITH FULL SPECS
// ============================================================================

export const products = [
  // ========== SOLAR: ETC (Evacuated Tube Collector) ==========
  {
    id: 1,
    name: "Heavy Plus 110 LPD",
    category: "solar",
    price: 16000,
    warranty: "5 Years",
    efficiency: "ETC | 110 LPD",
    image: "/images/hp110.jpeg",
    description:
      "Compact ETC system for small families with quick morning heat-up and low upkeep. Three-layered evacuated glass tubes ensure consistent heating even in cloudy weather.",
    features: [
      "Three-layer evacuated glass tubes",
      "Heavy Plus build quality",
      "Fast morning heating",
      "Weather resistant",
      "Low maintenance required",
    ],
    specs: {
      brand: "Supreme",
      collectorType: "ETC (Evacuated Tube)",
      capacity: "110 LPD",
      suitableFor: "2–3 family members / 1 bathroom",
      tankMaterial: "High-Grade Steel (Inner), Galvanized (Outer)",
      insulation: "PUF 50mm (Polyurethane Foam)",
      collarTubes: "Number of tubes depends on capacity",
      standFrame: "Galvanized & Power Coated",
      weldingMethod: "Seamless & Non-Welding Technology",
      maxTemperature: "70°C",
      idealFor: "North/South Indian homes, annual sunshine",
      installation: "Rooftop, needs direct sunlight, includes basic plumbing",
    },
    faqs: [
      {
        q: "Does it work in winter?",
        a: "Yes. Evacuated tubes absorb sunlight even on cloudy days. In winter, you'll get hot water in early morning hours.",
      },
      { q: "What is the lifespan?", a: "10–15 years with proper maintenance. Glass tubes may need replacement after 8–10 years." },
      { q: "Do you provide installation?", a: "Yes, with site inspection, structural assessment, and plumbing work included." },
      {
        q: "Can it be installed on all roof types?",
        a: "Most roof types supported. RCC, mild steel, or tile roofs work well. We assess and confirm during site visit.",
      },
    ],
  },

  {
    id: 2,
    name: "Heavy Plus 165 LPD",
    category: "solar",
    price: 21000,
    warranty: "5 Years",
    efficiency: "ETC | 165 LPD",
    image: "/images/hp165.png",
    description:
      "Balanced 165 LPD capacity ideal for 3–4 members with robust insulation and premium tubing. Reliable hot water throughout the year.",
    features: [
      "Three-layer evacuated glass tubes",
      "Robust build quality",
      "Enhanced heat retention",
      "Quick heating cycles",
      "Weather resistant",
      "Low maintenance",
    ],
    specs: {
      brand: "Supreme",
      collectorType: "ETC (Evacuated Tube)",
      capacity: "165 LPD",
      suitableFor: "3–4 family members / 2 bathrooms (part-time)",
      tankMaterial: "High-Grade Steel (Inner), Galvanized (Outer)",
      insulation: "PUF 50mm (Polyurethane Foam)",
      standFrame: "Galvanized & Power Coated",
      maxTemperature: "70°C",
      idealFor: "Bengaluru, Tamil Nadu, Andhra Pradesh regions",
      installation: "Rooftop with 30° south-facing angle preferred",
    },
    faqs: [
      { q: "Is it better than 110 LPD?", a: "Yes, larger tank means more hot water storage and longer usage hours per day." },
      {
        q: "What about maintenance?",
        a: "Minimal maintenance. Annual inspection recommended. Tubes last 8–10 years before replacement.",
      },
      { q: "Can I add backup heating?", a: "Yes, we offer gas/electric backup integration. Costs ₹3,000–₹8,000 extra." },
    ],
  },

  {
    id: 3,
    name: "Heavy Plus 200 LPD",
    category: "solar",
    price: 24500,
    warranty: "5 Years",
    efficiency: "ETC | 200 LPD",
    image: "/images/hp110.jpeg",
    description:
      "Popular family-size ETC with reliable hot water across most seasons at low cost. Trusted by thousands of households in India.",
    features: [
      "Three-layer evacuated glass tubes",
      "Robust insulation",
      "Heavy-duty frame",
      "Consistent 70°C output",
      "Low electricity consumption",
      "Minimal maintenance",
    ],
    specs: {
      brand: "Supreme",
      collectorType: "ETC (Evacuated Tube)",
      capacity: "200 LPD",
      suitableFor: "4–5 family members / 2 bathrooms",
      tankMaterial: "High-Grade Steel with Prime Guard Coating",
      insulation: "PUF 50mm",
      standFrame: "Galvanized Power Coated Steel",
      maxTemperature: "70°C",
      connectors: "Stainless Steel",
      fasteners: "Stainless Steel",
      idealFor: "Middle-class homes, VPOs, small colonies",
      installation: "Professional rooftop installation with 48-hour testing",
    },
    faqs: [
      { q: "How many hours of hot water daily?", a: "Depends on sunlight. Typical 4–6 hours in winter, 8–10 in summer." },
      { q: "Is plumbing complex?", a: "No, we handle it. Standard integration with existing geysers and tanks." },
      {
        q: "What if I need more backup?",
        a: "You can add immersion heater (₹500–₹2,000) or electric geyser in-line.",
      },
    ],
  },

  {
    id: 4,
    name: "Heavy Plus 220 LPD",
    category: "solar",
    price: 25500,
    warranty: "5 Years",
    efficiency: "ETC | 220 LPD",
    image: "/images/hp220.webp",
    description: "Extra headroom for larger households and peak-hour demand. Maintains comfortable water temperature even with multiple simultaneous uses.",
    features: [
      "Three-layer evacuated glass tubes",
      "Premium tank insulation",
      "Heavy-duty construction",
      "Fast heat recovery",
      "Zero electricity cost operation",
      "Eco-friendly",
    ],
    specs: {
      brand: "Supreme",
      collectorType: "ETC (Evacuated Tube)",
      capacity: "220 LPD",
      suitableFor: "4–6 family members / 2+ bathrooms",
      tankMaterial: "2mm H.R. Steel with Co2 Welding & Prime Guard Coating",
      insulation: "PUF 50mm Polyurethane Foam",
      standFrame: "Galvanized Power Coated",
      pressureRating: "Normal (Non-Pressurized)",
      maxTemperature: "70°C",
      ideal: "Duplex homes, farms, small guest houses",
    },
    faqs: [
      { q: "Can I get hot water in peak hours?", a: "Yes, larger tank stores more heat. Peak hour usage supported well." },
      {
        q: "Do I need a backup heater?",
        a: "In winter months (Nov–Feb), a 1–2 kW immersion heater recommended.",
      },
    ],
  },

  {
    id: 5,
    name: "Heavy Plus 270 LPD",
    category: "solar",
    price: 31000,
    warranty: "5 Years",
    efficiency: "ETC | 270 LPD",
    image: "/images/hp220.webp",
    description: "Higher capacity system for duplexes or two bathrooms running in parallel. Consistent hot water supply throughout peak usage hours.",
    features: [
      "Extra-large capacity",
      "Heavy-duty frame",
      "Premium insulation",
      "Simultaneous multi-use support",
      "Weather resistant",
      "Minimal corrosion",
    ],
    specs: {
      brand: "Supreme",
      collectorType: "ETC (Evacuated Tube)",
      capacity: "270 LPD",
      suitableFor: "6–7 family members / 2–3 bathrooms",
      tankMaterial: "High-Grade Steel with Prime Guard Coating",
      insulation: "PUF 50mm",
      standFrame: "Galvanized Power Coated Steel",
      maxTemperature: "70°C",
      idealFor: "Duplex homes, villas, guest houses, small commercial",
    },
    faqs: [
      { q: "Will it fit on my roof?", a: "Most roof sizes accommodate 270L. We do structural assessment at site." },
      { q: "Is 270L really needed for 6 members?", a: "Yes, for 2–3 bathrooms with morning + evening showers running simultaneously." },
    ],
  },

  {
    id: 6,
    name: "Heavy Plus 300 LPD",
    category: "solar",
    price: 38000,
    warranty: "5 Years",
    efficiency: "ETC | 300 LPD",
    image: "/images/hp300.jpeg",
    description:
      "300 LPD ETC with efficient heat retention for families with frequent usage. Premium option for homes prioritizing consistent hot water availability.",
    features: [
      "Large-capacity storage",
      "Heavy-duty construction",
      "Enhanced heat retention",
      "Premium insulation",
      "Multi-simultaneous-use support",
      "Long lifespan",
    ],
    specs: {
      brand: "Supreme",
      collectorType: "ETC (Evacuated Tube)",
      capacity: "300 LPD",
      suitableFor: "7–8 family members / 3 bathrooms",
      tankMaterial: "High-Grade Steel with Co2 Welding",
      insulation: "PUF 50mm Premium Grade",
      standFrame: "Galvanized Power Coated Heavy-Duty",
      pressureRating: "Normal Non-Pressurized",
      maxTemperature: "70°C",
      warranty: "5 Years on Tank, 2 Years on Tubes",
      ideal: "Villas, large families, small resorts",
    },
    faqs: [
      {
        q: "Is 300 LPD too much for a home?",
        a: "Not if you have 7+ family members or frequent guests. Extra capacity is never wasted.",
      },
      { q: "Does it cost too much to maintain?", a: "Maintenance cost is minimal—just annual inspection." },
    ],
  },

  {
    id: 7,
    name: "Heavy Plus 500 LPD",
    category: "solar",
    price: 53000,
    warranty: "5 Years",
    efficiency: "ETC | 500 LPD",
    image: "/images/hp500.jpeg",
    description:
      "Large-capacity ETC solution for villas and small commercial needs. Premium hot water supply for high-demand environments.",
    features: [
      "Large-capacity storage",
      "Industrial build quality",
      "Heavy-duty frame and stands",
      "Maximum heat retention",
      "Supports high water flow",
      "Professional installation",
    ],
    specs: {
      brand: "Supreme",
      collectorType: "ETC (Evacuated Tube)",
      capacity: "500 LPD",
      suitableFor: "10+ family members / Large villa / Small commercial",
      tankMaterial: "High-Grade Steel with Co2 Welding & Prime Guard",
      insulation: "PUF 50mm Premium Grade",
      standFrame: "Galvanized Power Coated Heavy-Duty",
      pressureRating: "Normal (Non-Pressurized)",
      maxTemperature: "70°C",
      warranty: "5 Years on Tank, 2 Years on Tubes",
      ideal: "Villas, resorts, guest houses, small hotels",
    },
    faqs: [
      { q: "Can I install this alone?", a: "No, requires professional team. We handle complete installation + testing." },
      { q: "What about roof load?", a: "We assess structural capacity. Most RCC roofs handle 500L system." },
    ],
  },

  // ========== SOLAR: FPC Non-Pressurized ==========
  {
    id: 8,
    name: "FPC Non-Pressurized 220 LPD",
    category: "solar",
    price: 56000,
    warranty: "5 Years",
    efficiency: "FPC | 220 LPD",
    image: "/images/fpc-220.jpg",
    description:
      "Flat Plate Collector with durable absorber and stable performance in varied climates. Better suited for frequent draw-offs and coastal areas.",
    features: [
      "1.2mm Aluminium section",
      "High-efficiency flat plate collector",
      "Fiber glass wool insulation",
      "Copper header pipes",
      "Stable performance year-round",
      "Premium materials",
    ],
    specs: {
      brand: "Supreme",
      collectorType: "FPC (Flat Plate Collector)",
      capacity: "220 LPD",
      pressureType: "Non-Pressurized",
      suitableFor: "3–4 family members with frequent hot water needs",
      collectorSection: "1.2mm thick Aluminium",
      backSheet: "0.46mm thick Aluminium",
      insulation: "Fiber Glass Wool",
      glassGlazing: "1000 x 2000 x 4mm Toughened Glass",
      headerPipe: "Copper 24 SWG",
      foil: "0.05mm Aluminium",
      innerTank: "1.2mm C.R.C.A. Steel with Prime Guard Coating",
      tankInsulation: "PUF 50mm",
      connectors: "Stainless Steel",
      idealFor: "Coastal areas, areas with moderate pressure water",
    },
    faqs: [
      {
        q: "Why FPC instead of ETC?",
        a: "FPC handles frequent hot water draw-offs better. Good for showers and daily use.",
      },
      {
        q: "Does it work in coastal climates?",
        a: "Yes, FPC's flat design is better for coastal wind and humidity.",
      },
      { q: "Is maintenance easier?", a: "Slightly easier than ETC. No fragile glass tubes." },
    ],
  },

  {
    id: 9,
    name: "FPC Non-Pressurized 275 LPD",
    category: "solar",
    price: 61000,
    warranty: "5 Years",
    efficiency: "FPC | 275 LPD",
    image: "/images/fpc-275.jpg",
    description:
      "Higher non-pressurized FPC capacity with consistent delivery and low losses. Ideal for mid-sized families with regular hot water usage.",
    features: [
      "Flat plate aluminium collector",
      "Consistent temperature output",
      "Low heat loss design",
      "Durable absorber coating",
      "Efficient year-round performance",
    ],
    specs: {
      brand: "Supreme",
      collectorType: "FPC (Flat Plate Collector)",
      capacity: "275 LPD",
      pressureType: "Non-Pressurized",
      suitableFor: "4–5 family members",
      collectorSection: "1.2mm Aluminium",
      insulation: "Fiber Glass Wool",
      tankInsulation: "PUF 50mm",
      pressureRating: "Low-pressure (suitable for gravity systems)",
      idealFor: "Areas with lower water pressure, frequent usage",
    },
    faqs: [
      { q: "What's better—ETC or FPC?", a: "ETC: better in winter/cloudy weather. FPC: better for frequent draw-offs." },
      { q: "Can I retrofit with backup?", a: "Yes, add 2–3 kW electric backup easily." },
    ],
  },

  {
    id: 10,
    name: "FPC Non-Pressurized 300 LPD",
    category: "solar",
    price: 73000,
    warranty: "5 Years",
    efficiency: "FPC | 300 LPD",
    image: "/images/fpc-300.jpg",
    description:
      "300 LPD FPC suited for frequent draw-offs and steady temperature output. Premium non-pressurized system for large households.",
    features: [
      "Large-capacity flat plate collector",
      "Stable 65–70°C output",
      "Minimal heat loss",
      "Durable absorber surface",
      "Excellent flow rate",
    ],
    specs: {
      brand: "Supreme",
      collectorType: "FPC (Flat Plate Collector) Non-Pressurized",
      capacity: "300 LPD",
      suitableFor: "6–7 family members",
      collectorSection: "1.2mm Aluminium (Premium Grade)",
      insulation: "Fiber Glass Wool + PUF Tank Insulation",
      glassGlazing: "Toughened tempered glass",
      connectors: "Stainless Steel",
      idealFor: "Families with high daily hot water demand",
    },
    faqs: [
      { q: "Is 300L FPC better than 300L ETC?", a: "Different use cases: FPC for frequent use, ETC for cold climates." },
      { q: "What pressure does it need?", a: "Minimal pressure (0.3–1 kg/cm²). Gravity/low-pressure systems work." },
    ],
  },

  // ========== SOLAR: FPC Pressurized ==========
  {
    id: 11,
    name: "FPC Pressurized 220 LPD",
    category: "solar",
    price: 62000,
    warranty: "5 Years",
    efficiency: "FPC | 220 LPD | Pressurized",
    image: "/images/fpc-p-220.jpeg",
    description:
      "Pressurized FPC system for high line pressure homes and premium bath fittings. Supports rain showers and luxury bath fixtures.",
    features: [
      "Pressurized flat plate collector",
      "High line pressure support",
      "Luxury rain shower compatible",
      "Durable tank (3mm premium)",
      "Stable output",
    ],
    specs: {
      brand: "Supreme",
      collectorType: "FPC (Flat Plate Collector) Pressurized",
      capacity: "220 LPD",
      pressureType: "Pressurized (2.5–4 kg/cm²)",
      suitableFor: "3–4 members with high-pressure shower needs",
      tankMaterial: "2.5mm C.R.C.A. Steel with Prime Guard Coating",
      tankInsulation: "PUF 50mm",
      maxPressure: "4 kg/cm²",
      connectors: "Copper & Stainless Steel",
      ideal: "Homes with high line pressure, rain showers, whirlpool baths",
    },
    faqs: [
      { q: "Can I use rain showers?", a: "Yes, pressurized system supports rain showers and high-flow fixtures." },
      { q: "Is it more expensive?", a: "Yes, ₹5–8K more than non-pressurized due to premium tank material." },
      { q: "What water pressure is needed?", a: "Minimum 2.5 kg/cm², maximum 4 kg/cm²." },
    ],
  },

  {
    id: 12,
    name: "FPC Pressurized 275 LPD",
    category: "solar",
    price: 71000,
    warranty: "5 Years",
    efficiency: "FPC | 275 LPD | Pressurized",
    image: "/images/275-FPC.jpg",
    description:
      "Balanced pressurized capacity supporting multi-bath usage without drop in flow. Premium system for upscale homes.",
    features: [
      "Pressurized flat plate system",
      "Multi-bath support",
      "No flow drop during usage",
      "Premium materials throughout",
      "High durability",
    ],
    specs: {
      brand: "Supreme",
      collectorType: "FPC Pressurized",
      capacity: "275 LPD",
      pressureType: "Pressurized (2.5–4 kg/cm²)",
      suitableFor: "4–5 members with 2–3 bathrooms",
      tankMaterial: "3mm C.R.C.A. Steel (Premium Grade)",
      maxPressure: "4 kg/cm²",
      connectors: "Copper Pipes with Stainless Fittings",
      ideal: "Luxury homes, villas, homes with multiple rain showers",
    },
    faqs: [
      { q: "Can both showers run hot water simultaneously?", a: "Yes, 275L supports 2 simultaneous showers easily." },
      { q: "Is warranty same?", a: "Yes, 5-year tank warranty, 2-year collector warranty." },
    ],
  },

  {
    id: 13,
    name: "FPC Pressurized 300 LPD",
    category: "solar",
    price: 82000,
    warranty: "5 Years",
    efficiency: "FPC | 300 LPD | Pressurized",
    image: "/images/fpc-p-300.jpg",
    description:
      "Top-tier pressurized FPC for rain showers and long pipelines with steady output. Premium solution for luxury homes.",
    features: [
      "Premium pressurized system",
      "Supports long pipelines",
      "Steady high-pressure output",
      "Heavy-duty tank (3mm)",
      "Multiple simultaneous uses",
    ],
    specs: {
      brand: "Supreme",
      collectorType: "FPC Pressurized (Premium)",
      capacity: "300 LPD",
      pressureType: "Pressurized (2.5–4 kg/cm²)",
      suitableFor: "6–7 members / 3+ bathrooms",
      tankMaterial: "3mm premium C.R.C.A. Steel",
      tankInsulation: "PUF 50mm High-density",
      maxPressure: "4 kg/cm²",
      connectors: "Copper pipes with brass fittings",
      warranty: "5 Years Tank, 2 Years Collector",
      ideal: "Villas, luxury homes, long pipeline runs",
    },
    faqs: [
      { q: "Is 300L FPC pressurized the best?", a: "Yes, for luxury + frequent use in high-pressure homes." },
      { q: "Does long pipeline affect output?", a: "Pressurized system maintains flow even with 50m+ pipe runs." },
    ],
  },

  // ========== HEAT PUMP ==========
  {
    id: 15,
    name: "Heat Pump Water Heater 200L",
    category: "solar",
    price: 68999,
    originalPrice: 74999,
    warranty: "2 Years",
    efficiency: "COP up to 3.4 | 200 L",
    image: "/images/heatpump.jpg",
    description:
      "All-weather air-source heat pump delivering up to 70% energy savings vs electric geysers. Eco-friendly alternative to traditional heating.",
    features: [
      "COP (Coefficient of Performance) up to 3.4",
      "70% less electricity vs geyser",
      "Works in all weather (2°C–43°C)",
      "Quiet operation (whisper-silent)",
      "Smart digital controls",
      "Eco-friendly refrigerant (R32)",
      "Fast 2-hour full heating",
    ],
    specs: {
      brand: "Premium (Supreme Recommended)",
      technology: "Air-Source Heat Pump",
      capacity: "200 Litres",
      cop: "Up to 3.4 (energy-efficient)",
      heatingTime: "2 hours (full tank from 5°C)",
      powerConsumption: "1.5–2 kW (vs 4–5 kW for electric geyser)",
      operatingTemperature: "2°C to 43°C (all-weather)",
      noiseLevel: "≈48 dB (quieter than AC)",
      refrigerant: "R32 (eco-friendly, zero-ODP)",
      warranty: "2 Years Compressor, 5 Years Tank",
      ideal: "Eco-conscious homes, high electricity costs, commercial",
      annualSavings: "₹15,000–25,000 vs electric geyser (depending on usage)",
    },
    faqs: [
      {
        q: "Why heat pump over solar?",
        a: "Heat pump works 24/7 in all weather (no sun needed). Solar is free but weather-dependent.",
      },
      { q: "What are running costs?", a: "₹400–600/month vs ₹1,200–1,800 for electric geyser. Pays for itself in 3 years." },
      { q: "Does it work in winter?", a: "Yes, operates down to 2°C. Slightly slower but works. Can add electric backup." },
      {
        q: "Is installation complex?",
        a: "Moderate. Needs outdoor unit space, electrical wiring, plumbing. Professional install recommended.",
      },
    ],
  },

  // ========== WATER PURIFIERS ==========
  {
    id: 16,
    name: "Aqua Grand RO",
    category: "purifier",
    price: 7000,
    warranty: "1 Year",
    efficiency: "RO | Household",
    image: "/images/AquagrandRO.jpg",
    description: "Budget RO for essential daily drinking needs with serviceable filters. Simple, affordable entry-level purification.",
    features: ["RO filtration", "Carbon polishing", "Serviceable filters", "Compact design", "Budget-friendly"],
    specs: {
      brand: "Aqua",
      purificationType: "RO (Reverse Osmosis)",
      stages: "3–4 stages (sediment, carbon, RO, post-carbon)",
      storageCapacity: "3–5 Litres",
      flowRate: "8–10 LPH",
      tdsRange: "Up to 2000 ppm input",
      filterLife: "12–18 months (depends on TDS)",
      warranty: "1 Year",
      installation: "Wall-mounted or counter-top",
      maintenance: "Filter change every 12–18 months (₹1,500–2,000)",
      ideal: "Small families, budget-conscious, low-TDS areas",
    },
    faqs: [
      { q: "Is budget RO safe?", a: "Yes, RO membrane removes 99% impurities. 'Budget' means fewer extra features." },
      { q: "How often to change filters?", a: "Every 12–18 months depending on water quality and usage." },
      { q: "What TDS should be acceptable?", a: "Below 300 ppm is ideal. Above 500 ppm needs RO+other treatments." },
    ],
  },

  {
    id: 17,
    name: "Aqua Pearl RO",
    category: "purifier",
    price: 8500,
    warranty: "1 Year",
    efficiency: "RO | Household",
    image: "/images/Aqua-Pearl-RO.jpg",
    description: "Value RO with dependable purification and easy wall-mount design. Mid-range option with balanced features.",
    features: ["Core RO filtration", "Sediment + carbon pre-filter", "Wall-mount ready", "Serviceable", "Mid-range cost"],
    specs: {
      brand: "Aqua",
      purificationType: "RO (Reverse Osmosis)",
      stages: "3–4 stages",
      storageCapacity: "4–7 Litres",
      flowRate: "10–12 LPH",
      tdsRange: "Up to 2000 ppm",
      filterLife: "12–18 months",
      warranty: "1 Year",
      installation: "Wall-mounted (compact)",
      ideal: "Small to mid-size families, moderate water quality",
    },
    faqs: [
      { q: "What's the difference from Aqua Grand?", a: "Better flow rate (LPH), slightly larger storage, wall-mount friendly." },
      { q: "Is it better than costlier models?", a: "Core purification is same. Extra cost buys extras like UV, taste enhancer, TDS control." },
    ],
  },

  {
    id: 18,
    name: "Copper Pearl RO",
    category: "purifier",
    price: 9500,
    warranty: "1 Year",
    efficiency: "RO | Household",
    image: "/images/copperpearlro.jpg",
    description: "RO with copper enrichment for taste and hygiene-focused households. Adds mineral richness to purified water.",
    features: ["Copper enrichment cartridge", "RO filtration", "Taste enhancer", "Filter alerts", "Sleek design"],
    specs: {
      brand: "Aqua",
      purificationType: "RO + Copper Enrichment",
      stages: "4 stages (sediment, carbon, RO, copper/mineral)",
      storageCapacity: "5–7 Litres",
      flowRate: "10–12 LPH",
      tdsRange: "Up to 2000 ppm",
      copperBenefit: "Adds copper minerals for better taste & skin health",
      filterLife: "12–18 months",
      warranty: "1 Year",
      installation: "Wall-mounted",
      ideal: "Health-conscious families, areas with bad-tasting water",
    },
    faqs: [
      { q: "Is copper water safe?", a: "Yes, in small amounts (from enrichment cartridge). Enhances taste + provides antimicrobial benefits." },
      { q: "Do I need copper water?", a: "Not essential but nice-to-have. Better taste, slight health benefits." },
    ],
  },

  {
    id: 19,
    name: "Purosis RO",
    category: "purifier",
    price: 11500,
    warranty: "1 Year",
    efficiency: "RO | Household",
    image: "/images/purosisro.jpg",
    description: "Trusted RO brand with essential multi-stage filtration and reliable build. Good middle-ground option.",
    features: ["Multi-stage RO", "Reliable build quality", "Serviceable filters", "Compact body", "Budget-friendly"],
    specs: {
      brand: "Purosis",
      purificationType: "RO (Reverse Osmosis)",
      stages: "4 stages",
      storageCapacity: "5–7 Litres",
      flowRate: "10–12 LPH",
      tdsRange: "Up to 2000 ppm",
      filterLife: "12–18 months",
      warranty: "1 Year (India-wide service)",
      installation: "Wall-mounted or counter-top",
      ideal: "Mid-size families, reliable Indian brand preferred",
    },
    faqs: [
      { q: "Is Purosis a trusted brand?", a: "Yes, established brand with 10+ years in market, good service network." },
      { q: "How's warranty support?", a: "India-wide service centers. Complaints resolved in 24–48 hours." },
    ],
  },

  {
    id: 20,
    name: "Innovica RO",
    category: "purifier",
    price: 12000,
    warranty: "1 Year",
    efficiency: "RO | Household",
    image: "/images/aqua innovacia.jpg",
    description: "Balanced RO for daily use with low TDS compatibility and easy maintenance. Good all-rounder option.",
    features: ["RO + Carbon combo", "Low TDS compatible", "Easy maintenance", "Compact design", "Quick filter changes"],
    specs: {
      brand: "Innovica (Aqua)",
      purificationType: "RO (Reverse Osmosis)",
      stages: "4 stages (pre-sediment, carbon, RO, post-carbon)",
      storageCapacity: "5–7 Litres",
      flowRate: "10–12 LPH",
      tdsRange: "Up to 1500 ppm",
      filterLife: "12–18 months",
      warranty: "1 Year",
      installation: "Wall-mounted",
      maintenance: "DIY filter change (easy, no tools)",
      ideal: "Moderate water quality, budget-conscious families",
    },
    faqs: [
      { q: "Is DIY filter change easy?", a: "Yes, push-fit cartridges. No wrench needed. ~5 minutes to change." },
      { q: "What if TDS is very high (>1500)?", a: "Upgrade to KENT or Aquaguard with TDS control." },
    ],
  },

  {
    id: 21,
    name: "Finpure RO",
    category: "purifier",
    price: 13000,
    warranty: "1 Year",
    efficiency: "RO | Household",
    image: "/images/finpure.png",
    description: "Premium RO with refined filtration, indicators and durable components. Enhanced features for health-focused users.",
    features: [
      "Enhanced taste filtration",
      "Durable components (stainless steel valve)",
      "Alert indicators (filter life, tank full)",
      "Easy service",
      "Aesthetic design",
    ],
    specs: {
      brand: "Finpure",
      purificationType: "RO (Reverse Osmosis)",
      stages: "4–5 stages (pre-filter, carbon, RO, taste enhancer, post-carbon)",
      storageCapacity: "6–8 Litres",
      flowRate: "12–14 LPH",
      tdsRange: "Up to 2000 ppm",
      filterAlerts: "Yes (LED indicator for filter life)",
      tankFullAlert: "Yes",
      valves: "Stainless Steel (premium)",
      filterLife: "12–18 months",
      warranty: "1 Year",
      installation: "Wall-mounted",
      ideal: "Health-conscious families, high-TDS areas, premium budgets",
    },
    faqs: [
      { q: "Why is Finpure expensive?", a: "Better filtration, alerts, durable valves. Better taste & peace of mind." },
      { q: "Do I really need taste enhancer?", a: "If water tastes bad/metallic, yes. Otherwise, basic RO is fine." },
    ],
  },

  {
    id: 22,
    name: "Aquaguard RO+UV+UF 7L",
    category: "purifier",
    price: 15499,
    originalPrice: 17499,
    warranty: "1 Year",
    efficiency: "7 L | 15 LPH",
    image: "/images/aquaguardro.webp",
    description:
      "Trusted multi-stage RO+UV+UF with taste enhancer for urban water conditions. Premium brand, comprehensive purification.",
    features: [
      "RO (Reverse Osmosis) – removes TDS",
      "UV (Ultraviolet) – kills bacteria/viruses",
      "UF (Ultrafiltration) – removes suspended particles",
      "Taste enhancer cartridge",
      "Built-in pre-filter",
      "Smart alerts (filter life, tank full)",
      "Aquaguard brand trust",
    ],
    specs: {
      brand: "Aquaguard",
      purificationType: "RO+UV+UF (3-stage combined)",
      stages: "5+ (pre-filter, RO, UV, UF, taste enhancer, post-carbon)",
      storageCapacity: "7 Litres",
      flowRate: "15 LPH",
      tdsRange: "Up to 2000 ppm input",
      waterSavings: "Low wastage design (4:1 ratio good)",
      builtInPreFilter: "Yes (50 micron sediment)",
      uvPower: "8 W",
      filterLife: "12–18 months",
      warranty: "1 Year (Aquaguard brand service)",
      serviceAvailability: "Pan-India (excellent service network)",
      installation: "Wall-mounted",
      ideal: "Urban homes with variable water quality, brand-conscious families",
      annualServiceCost: "₹2,000–3,000 (filter + maintenance)",
    },
    faqs: [
      {
        q: "Is RO+UV+UF better than RO alone?",
        a: "Yes. RO removes salts/TDS, UV kills bacteria/viruses, UF removes particles. Triple protection.",
      },
      { q: "Aquaguard brand—is it reliable?", a: "Yes, 20+ years in market, trusted by millions, excellent service support." },
      { q: "What if water is very hard?", a: "RO handles high hardness. For very hard water, add water softener separately." },
      { q: "Service cost?", a: "Annual filter change + maintenance ≈ ₹2,000–3,000." },
    ],
  },

  {
    id: 23,
    name: "KENT Grand Plus RO+UV+UF+TDS 8L",
    category: "purifier",
    price: 16999,
    originalPrice: 19999,
    warranty: "1 Year",
    efficiency: "8 L | 20 LPH",
    image: "/images/kentro.jpg",
    description:
      "Advanced purification with TDS control, mineral retention and UV in-tank. Premium option for complete water treatment.",
    features: [
      "RO+UV+UF+TDS Control (4-stage)",
      "TDS Control valve (adjust mineral level)",
      "Mineral retention (healthier water)",
      "UV light in-tank (continuous disinfection)",
      "Zero water wastage design",
      "Taste enhancer",
      "Low power consumption",
      "Smart alerts",
    ],
    specs: {
      brand: "KENT",
      purificationType: "RO+UV+UF+TDS (4-stage purification)",
      stages: "6+ (pre-filter, RO, UV, UF, TDS control, post-carbon)",
      storageCapacity: "8 Litres",
      flowRate: "20 LPH",
      tdsRange: "Up to 2000 ppm input, adjustable output (100–500 ppm)",
      tdsControl: "Yes (adjust mineral level for taste + health)",
      mineralRetention: "15–30% minerals retained (vs 0% in plain RO)",
      uvInTank: "Yes (continuous disinfection)",
      wastageRatio: "Low (4:1 to 3:1)",
      powerConsumption: "Low",
      warranty: "1 Year (KENT Pan-India service)",
      installation: "Wall-mounted",
      ideal: "Health-conscious families, high-TDS areas, premium segment, long-term solution",
      annualServiceCost: "₹2,500–3,500",
    },
    faqs: [
      {
        q: "What is TDS control?",
        a: "Valve lets you adjust minerals in output. 100 ppm = safer but less taste. 500 ppm = more minerals for taste.",
      },
      {
        q: "Is mineral retention important?",
        a: "Yes, plain RO removes all minerals (risky long-term). KENT's TDS control retains essential minerals.",
      },
      { q: "Why is it ₹16,999 when Aquaguard is ₹15,499?", a: "TDS control + mineral retention + better filtration = premium price justified." },
      { q: "Does KENT have good service?", a: "Yes, excellent service network. Faster support than competitors." },
      {
        q: "Long-term worth?",
        a: "Yes. Pays for itself in health benefits. Costs ~₹1.50–2/L after installation+service.",
      },
    ],
  },

  {
    id: 24,
    name: "Dolphin RO",
    category: "purifier",
    price: 7500,
    warranty: "1 Year",
    efficiency: "RO | Household",
    image: "/images/dolphin.jpg",
    description: "Sturdy RO with robust housing and reliable output for small families. Simple, durable, affordable.",
    features: ["Robust housing", "RO filtration", "Service support", "Reliable output", "Compact"],
    specs: {
      brand: "Dolphin",
      purificationType: "RO (Reverse Osmosis)",
      stages: "3–4 stages",
      storageCapacity: "5–7 Litres",
      flowRate: "10–12 LPH",
      tdsRange: "Up to 2000 ppm",
      housing: "Heavy plastic (durable)",
      filterLife: "12–18 months",
      warranty: "1 Year",
      installation: "Wall-mounted",
      ideal: "Budget-conscious, small families, rural areas",
    },
    faqs: [
      { q: "Is Dolphin a reliable brand?", a: "Yes, Indian brand, good value for money, decent service support." },
    ],
  },

  // ========== CHIMNEYS ==========
  {
    id: 25,
    name: "Supreme ECO H4 60 cm Auto-Clean",
    category: "chimney",
    price: 12999,
    originalPrice: 15999,
    warranty: "1 Year",
    efficiency: "1200 m³/hr",
    image: "/images/chimney1.png",
    description:
      "Auto-clean wall-mount chimney with touch controls and bright LED lighting. Budget-friendly with smart auto-cleaning.",
    features: [
      "Auto-clean baffle filter",
      "Touch controls (digital)",
      "LED lamps (bright)",
      "Low noise operation",
      "Wall-mounted (space-saving)",
      "Energy efficient",
    ],
    specs: {
      brand: "Supreme",
      type: "Wall-Mounted Chimney",
      width: "60 cm",
      suctionCapacity: "1200 m³/hour",
      filterType: "Auto-Clean Baffle Filter (aluminum)",
      controls: "Touch panel (3-speed)",
      led: "Yes (bright LED lighting)",
      oilCollector: "Yes (easy cleanup)",
      noise: "Low (≈60 dB)",
      power: "0.45–0.6 kW",
      installation: "Wall-mounted (pipes to outside)",
      warranty: "1 Year (parts + labor)",
      ideal: "Budget kitchens, small cooking areas, noise-sensitive homes",
    },
    faqs: [
      { q: "How does auto-clean work?", a: "Filter vibrates to shake off oil deposits. Manual cleaning still needed quarterly." },
      { q: "1200 m³/hr—is it enough?", a: "Yes for 60 cm width. Adequate for normal Indian cooking (daily spice/oil cooking)." },
      { q: "Can I install myself?", a: "DIY possible but professional installation recommended (ductwork, electricity). ₹1,500–3,000 install cost." },
      { q: "How often to clean?", a: "Quarterly deep clean. Monthly wipe-down of visible grease." },
    ],
  },

  {
    id: 26,
    name: "Supreme FIGO XL 90 cm Touch",
    category: "chimney",
    price: 17999,
    originalPrice: 20999,
    warranty: "1 Year",
    efficiency: "1400 m³/hr",
    image: "/images/chimney2.jpg",
    description:
      "Wide 90 cm canopy for heavy cooking with high suction and simple upkeep. Premium option for larger kitchens.",
    features: [
      "90 cm wide canopy (covers large stove)",
      "High suction (1400 m³/hr)",
      "Touch panel controls",
      "Oil collector tray",
      "LED lamps",
      "Dual filter option",
      "Low noise",
    ],
    specs: {
      brand: "Supreme",
      type: "Wall-Mounted Chimney",
      width: "90 cm",
      suctionCapacity: "1400 m³/hour (high)",
      filterType: "Baffle Filter (aluminum, replaceable)",
      controls: "Touch panel (3-speed)",
      led: "Yes",
      oilCollector: "Yes (deep tray)",
      noise: "Low (≈62 dB)",
      power: "0.6–0.75 kW",
      warranty: "1 Year",
      installation: "Professional installation recommended",
      ideal: "Large kitchens, heavy daily cooking (Indian masala cooking), 90+ cm stoves",
    },
    faqs: [
      { q: "Is 90 cm better than 60 cm?", a: "Yes, covers larger area, higher suction, better for heavy cooking." },
      { q: "1400 m³/hr—does it consume much power?", a: "≈60 W running cost. ~₹150–200/month if used 5 hours daily." },
      { q: "How to maintain?", a: "Monthly oil collector dump, quarterly filter wash, annual motor check." },
      { q: "Is installation expensive?", a: "Yes, 90 cm needs longer ductwork, larger opening. ₹2,000–5,000 install cost." },
    ],
  },

  {
    id: 27,
    name: "Supreme CROWN X 60 cm",
    category: "chimney",
    price: 14999,
    originalPrice: 17999,
    warranty: "1 Year",
    efficiency: "1100 m³/hr",
    image: "/images/chimney3.jpg",
    description:
      "Compact 60 cm chimney with efficient filtration and clean touch interface. Space-saving mid-range option.",
    features: [
      "Space-saving 60 cm size",
      "Touch controls",
      "Baffle/Mesh filter options",
      "Copper motor (durable)",
      "LED lighting",
      "Efficient suction",
      "Easy maintenance",
    ],
    specs: {
      brand: "Supreme",
      type: "Wall-Mounted Chimney",
      width: "60 cm",
      suctionCapacity: "1100 m³/hour",
      filterType: "Baffle & Mesh filter combo",
      motor: "Copper motor (durable, long life)",
      controls: "Touch panel (3-speed)",
      led: "Yes",
      oilCollector: "Yes",
      noise: "Low (≈60 dB)",
      power: "0.45–0.55 kW",
      warranty: "1 Year (Supreme service)",
      installation: "Wall-mounted",
      ideal: "Mid-size kitchens, daily cooking, space-constrained homes",
    },
    faqs: [
      { q: "Why 'CROWN X'?", a: "Premium positioning—better motor (copper), dual filter option." },
      { q: "Baffle vs Mesh filter?", a: "Baffle: low maintenance, mesh: frequent cleaning. This has both options." },
      { q: "Is copper motor really better?", a: "Yes, lasts longer (10+ years vs 5–7 for standard). Better heat dissipation." },
      { q: "Installation cost?", a: "₹1,500–2,500 (less than 90 cm models)." },
    ],
  },

  // ========== UPS ==========
  {
    id: 28,
    name: "Luminous Zelio+ 1100 Pure Sine Wave",
    category: "ups",
    price: 10500,
    originalPrice: 11990,
    warranty: "24 Months",
    efficiency: "900 VA | 756 W",
    image: "/images/lum1.jpg",
    description:
      "Smart sine wave UPS with LCD, fast changeover and dependable backup timing. Premium home inverter.",
    features: [
      "Pure Sine Wave technology",
      "32-bit DSP processor",
      "LCD display (shows status)",
      "Smart fast changeover",
      "Eco & UPS modes",
      "MCB protection",
      "Intelligent home UPS",
    ],
    specs: {
      brand: "Luminous",
      model: "Zelio+ 1100",
      type: "Pure Sine Wave Inverter",
      capacity: "1100 VA | 900 W",
      realPower: "756 W",
      technology: "32-bit DSP & LCD",
      waveType: "Pure Sine Wave (best for appliances)",
      batterySupported: "Single 12V battery",
      chargerCurrent: "15 A max",
      eco_mode: "Yes (saves power)",
      ups_mode: "Yes (battery backup)",
      protections: ["MCB protection", "Overload", "Short circuit", "Battery deep discharge"],
      warranty: "24 Months (2 Years)",
      weight: "10 kg",
      installation: "Floor-mounted (wall-mount possible)",
      ideal: "Small homes, 2-BHK, critical loads (lights, fans, WiFi, laptop)",
      batteryNeeded: "1x 150 Ah or equivalent (buy separately, ~₹8,000–12,000)",
      backupTime: "3–4 hours (depends on battery)",
    },
    faqs: [
      {
        q: "Pure sine wave vs square wave?",
        a: "Pure sine: safe for all appliances (AC, fridge, pump). Square wave: only for lights/fans.",
      },
      { q: "Do I need to buy battery?", a: "Yes, this is inverter only. Buy 150 Ah lead-acid or 100 Ah lithium battery." },
      { q: "How long will it last?", a: "Inverter: 10–15 years. Battery: 3–5 years (lead-acid) or 10+ (lithium)." },
      {
        q: "Can it run a refrigerator?",
        a: "Yes, pure sine wave is safe for compressors. Typical 250L fridge = 2–4 hours backup.",
      },
      { q: "Cost to fully set up?", a: "Inverter ₹10,500 + Battery ₹9,000 + Installation ₹1,500 = ~₹21,000 total." },
    ],
  },

  {
    id: 29,
    name: "Luminous Eco Watt Neo 1050",
    category: "ups",
    price: 8550,
    originalPrice: 9990,
    warranty: "24 Months",
    efficiency: "900 VA | 756 W",
    image: "/images/lum2.jpg",
    description:
      "Reliable home UPS with intelligent charging and wide input handling. Budget-friendly Luminous inverter.",
    features: [
      "Intelligent charging algorithm",
      "Square/Intelligent wave output",
      "Microprocessor-based",
      "MCB protection",
      "Eco & UPS modes",
      "Fast charging (from low voltage)",
      "Wide input range (90–280V)",
    ],
    specs: {
      brand: "Luminous",
      model: "Eco Watt Neo 1050",
      type: "Square Wave / Intelligent Wave Inverter",
      capacity: "900 VA | 756 W",
      waveType: "Square/Intelligent Wave (budget option)",
      batterySupported: "Single 12V battery",
      chargerCurrent: "17 A max",
      inputRange: "90–280V AC (wide voltage tolerance)",
      protections: ["MCB", "Overload", "Short circuit", "Deep discharge"],
      warranty: "24 Months",
      weight: "9.8 kg",
      installation: "Floor or wall-mount",
      ideal: "Budget homes, lights/fans only, 1–2 BHK, areas with fluctuating power",
      batteryNeeded: "1x 120–150 Ah (buy separately)",
      backupTime: "3–4 hours (depends on battery size)",
    },
    faqs: [
      {
        q: "Square wave—can it run AC/fridge?",
        a: "Not recommended. Use for lights, fans, laptop only. AC/fridge need pure sine wave.",
      },
      {
        q: "Why is it cheaper?",
        a: "Square wave is simpler tech. Pure sine wave costs more but safer for all appliances.",
      },
      { q: "Good for backup?", a: "Yes, if you only need lights/fans. For mixed loads, upgrade to sine wave." },
    ],
  },

  {
    id: 30,
    name: "Luminous Li-ON 1250 (In-built Lithium)",
    category: "ups",
    price: 69990,
    originalPrice: 74990,
    warranty: "60 Months",
    efficiency: "1250 VA | Li-ion",
    image: "/images/lum3.jpg",
    description:
      "Premium inverter with in-built Li-ion battery for compact, fast-charging backup. Future-proof home energy solution.",
    features: [
      "In-built Lithium-ion battery (≈1280 Wh)",
      "Pure Sine Wave output",
      "Fast charging (90 mins from 0–100)",
      "Silent operation",
      "Smart LCD display",
      "Compact & lightweight",
      "Low maintenance (no water top-up)",
      "5-year warranty (longest)",
    ],
    specs: {
      brand: "Luminous",
      model: "Li-ON 1250",
      type: "Pure Sine Wave with In-Built Li-Ion Battery",
      capacity: "1250 VA | 1000 W (approx)",
      battery: "Lithium-ion (in-built), ~1280 Wh",
      chargeTime: "90 minutes (0–100%)",
      waveType: "Pure Sine Wave",
      features: ["Smart LCD", "WiFi monitoring (optional)", "MCB protection", "Compact design"],
      protections: ["Overload", "Short circuit", "Temperature", "Deep discharge"],
      warranty: "60 Months (5 Years) on battery",
      lifespan: "10–15 years (Li-ion advantage)",
      weight: "25–30 kg (heavier, but portable)",
      installation: "Wall-mount or floor (compact size)",
      backupTime: "4–6 hours typical home loads",
      ideal: "Premium segment, long-term use, low maintenance needed, eco-conscious",
      annualCost: "~₹0 (no maintenance, no water, no acid top-up)",
      paybackPeriod: "7–8 years (vs lead-acid replacements)",
    },
    faqs: [
      {
        q: "Why is it ₹70K when Zelio+ is ₹10K?",
        a: "Li-ion battery included (worth ₹50K+). No need to buy separate battery. Lasts 10+ years vs 3–5 for lead-acid.",
      },
      {
        q: "Is lithium safe?",
        a: "Yes, LFP (Lithium Iron Phosphate) is safest. Thermal protection built-in. No explosion risk like old lithium.",
      },
      { q: "Do I need an electrician?", a: "Professional installation strongly recommended. Wiring must be correct." },
      {
        q: "Maintenance cost?",
        a: "Nearly zero. No water top-up, no acid spills, no terminal corrosion. Just occasional dust wipe.",
      },
      {
        q: "Best investment?",
        a: "Yes, if you plan 10+ years. Pays for itself in maintenance + battery replacement savings.",
      },
    ],
  },

  {
    id: 33,
    name: "Li-ion Inverter + Battery 1.1 kVA",
    category: "ups",
    price: 38999,
    originalPrice: 44999,
    warranty: "60 Months",
    efficiency: "1100 VA | 880 W",
    image: "/images/inverter.jpg",
    description:
      "Compact pure sine wave inverter with in-built 1280 Wh Li-ion battery for zero-maintenance backup, fast charging, and clean, silent operation.",
    features: [
      "In-built Li-ion battery (1280 Wh)",
      "Pure Sine Wave output",
      "Fast charging capability",
      "Ultra-low input voltage ready (charges from 90V)",
      "Wall-mount compact design",
      "Silent operation",
      "Smart LCD display",
      "Zero maintenance",
    ],
    specs: {
      brand: "Luminous (Premium Series)",
      model: "Li-ion Inverter + Battery 1.1 kVA",
      type: "Pure Sine Wave with In-Built Li-Ion Battery",
      capacity: "1100 VA | 880 W",
      battery: "In-built Li-ion, 1280 Wh",
      chargeTime: "2–3 hours (typical)",
      lowInputReady: "Yes, charges from as low as 90V AC",
      waveType: "Pure Sine Wave (safe for all appliances)",
      design: "Wall-mount, compact, space-saving",
      weight: "~20–25 kg",
      installation: "Wall-mounted or floor (compact)",
      protections: [
        "Overload protection",
        "Short circuit protection",
        "Temperature monitoring",
        "Deep discharge protection",
        "Battery management system (BMS)",
      ],
      warranty: "60 Months (5 Years) comprehensive",
      lifespan: "10–15 years (Li-ion)",
      backupTime: "4–6 hours for typical home (lights, fans, router, laptop)",
      display: "Smart LCD (shows charge %, load %, time remaining)",
      ideal: "Mid-premium homes, areas with frequent power cuts, low maintenance desired, compact space",
      annualMaintenance: "₹0 (no water, no acid, no topping)",
      scalability: "Can stack multiple units for higher capacity",
    },
    faqs: [
      {
        q: "What's included—do I buy battery separately?",
        a: "No, battery is built-in. Complete solution. No need for external 150L tank (saves space).",
      },
      {
        q: "Is ₹39K reasonable?",
        a: "Yes. Inverter (₹10K) + Battery (₹25K) + Installation = ~₹35K+ total if bought separately.",
      },
      {
        q: "Can it run a refrigerator?",
        a: "Yes, pure sine wave is safe. 250L fridge = 2–3 hours backup. Heavy loads reduce time.",
      },
      {
        q: "How long to charge from 0–100%?",
        a: "Typical 2–3 hours on normal supply. With low voltage (90V), takes ~4–5 hours.",
      },
      {
        q: "Is it better than lead-acid UPS?",
        a: "Much better: compact, silent, 10+ year life (vs 3–5), no maintenance, no spills, eco-friendly.",
      },
      {
        q: "Warranty—what if battery fails?",
        a: "60-month (5-year) warranty covers battery + inverter. Free replacement if defect.",
      },
      {
        q: "Can I add solar to this?",
        a: "Yes, solar charge controller can be integrated. Ask for solar-ready variant.",
      },
    ],
  },

  // ========== COMMERCIAL ==========
  {
    id: 14,
    name: "Commercial Solar Water Heater 3000 LPD",
    category: "solar-commercial",
    price: 335000,
    warranty: "5 Years",
    efficiency: "ETC/FPC | 3000 LPD",
    image: "/images/comm1.jpg",
    description:
      "High-volume system for hotels, hostels, hospitals and kitchens with engineered piping. Bulk hot water on demand.",
    features: [
      "3000 LPD capacity",
      "Bulk hot water supply",
      "Rooftop installation",
      "Low maintenance",
      "Industrial-grade build",
      "Engineered piping system",
      "Custom flow management",
    ],
    specs: {
      brand: "Supreme",
      capacity: "3000 LPD",
      system: "ETC/FPC hybrid (customizable)",
      tankCount: "Multiple (compartmentalized)",
      tankMaterial: "High-grade steel with industrial coating",
      installation: "Rooftop with structural assessment",
      pumpSystem: "Circulating pump (optional)",
      pipeNetwork: "Engineered copper/SS pipes",
      warranty: "5 Years (tank + collectors)",
      serviceSupport: "Dedicated on-call support",
      ideal: "Hotels, hostels, hospitals, industrial kitchens, resorts, guest houses",
      roi: "18–24 months (saves ₹80,000–150,000/year on heating)",
    },
    faqs: [
      {
        q: "What's the ROI for commercial?",
        a: "Saves ₹80,000–150,000/year on fuel/electricity. Pays back in 2–3 years.",
      },
      {
        q: "Do you provide engineering?",
        a: "Yes, we assess load, design piping, ensure water flow. Complete turnkey solution.",
      },
      {
        q: "What about backup?",
        a: "Solar alone: 80% of winter days. Summer: 100%. Gas/electric backup highly recommended.",
      },
    ],
  },

  {
    id: 31,
    name: "Commercial Water Softener",
    category: "solar-commercial",
    price: 165000,
    warranty: "1 Year",
    efficiency: "Softener | 2000 LPH",
    image: "/images/softner.jpg",
    description:
      "Industrial-grade softener reducing hardness to protect plumbing and boilers. Large-capacity ion-exchange system.",
    features: [
      "Ion-exchange resin",
      "Auto/Manual regeneration",
      "High-flow valves",
      "FRP/SS vessel",
      "Hardness removal",
      "Scale prevention",
    ],
    specs: {
      brand: "Supreme (Commercial Grade)",
      type: "Water Softener (Ion-Exchange)",
      capacity: "2000 LPH (Liters Per Hour)",
      technology: "Ion-exchange resin process",
      resin: "Food-grade cation exchange resin",
      regeneration: "Auto (timer) or Manual",
      control: "Digital control panel with display",
      vesselMaterial: "FRP (Fiber Reinforced Plastic) or Stainless Steel",
      valves: "High-flow multi-port valves (durable)",
      hardnessRemoval: "Up to 1000 ppm hardness input → <10 ppm output",
      softeners: "Reduces limescale, extends boiler life",
      installation: "Commercial setting (kitchen, boiler room, central water system)",
      warranty: "1 Year",
      ideal: "Hotels, hospitals, industries, laundries, large residential complexes",
    },
    faqs: [
      {
        q: "Why soften water?",
        a: "Hardness damages pipes, blocks boilers, reduces appliance life. Softener prevents this, saves ₹50,000+ annually.",
      },
      { q: "Auto vs manual regeneration?", a: "Auto: convenient, uses water/salt. Manual: control when to clean." },
      { q: "Resin lifespan?", a: "5–10 years. Replacement cost ₹10,000–15,000." },
    ],
  },

  {
    id: 32,
    name: "Commercial RO Plant",
    category: "solar-commercial",
    price: 245000,
    warranty: "1 Year",
    efficiency: "RO | LPH Variants",
    image: "/images/commercial-ro-plant-500x500.webp",
    description:
      "High-capacity RO with robust pre-treatment and TDS reduction for institutions. Scalable water purification.",
    features: [
      "Multi-stage filtration",
      "Low TDS output (<50 ppm)",
      "SS/FRP skids",
      "Inline monitoring",
      "Scalable LPH options",
      "Minimal wastage",
    ],
    specs: {
      brand: "Supreme (Commercial RO)",
      type: "Commercial RO Plant",
      capacity: "25–5000 LPH (choose variant)",
      availableLph: ["25 LPH", "50 LPH", "100 LPH", "200 LPH", "500 LPH", "1000 LPH", "2000 LPH", "5000 LPH"],
      filtration: "Multi-stage (sediment, carbon, RO, post-carbon)",
      tdsFinalOutput: "<50 ppm (pure water)",
      wastageRatio: "Low (2:1 or better with recovery system)",
      pretreatment: "Included (water softener + carbon filters)",
      skidMaterial: "Stainless Steel (SS) or FRP (optional)",
      monitoring: "Inline TDS meter + pressure gauge",
      tankCapacity: "Varies (can be customized)",
      installation: "Commercial site (kitchen, lab, bottling plant, hospital)",
      warranty: "1 Year (equipment + labor)",
      ideal: "Hotels, hospitals, bottling plants, laboratories, large complexes, industries",
      maintenanceCost: "₹3,000–8,000/month (filter changes, cartridge replacements)",
      roi: "2–3 years (compared to bottled water bulk purchase)",
    },
    faqs: [
      {
        q: "Which LPH to choose?",
        a: "25 LPH = 600 L/day (guest house). 100 LPH = 2400 L/day (hotel). 500 LPH = 12,000 L/day (large hospital).",
      },
      { q: "What's included?", a: "RO skid, pre-treatment filters, inline monitoring, plumbing, installation." },
      { q: "Maintenance cost?", a: "₹3,000–8,000/month depending on capacity and local water quality." },
      {
        q: "TDS 50 ppm—is it safe to drink?",
        a: "Yes, but add mineral retention if desired. Pure water (low TDS) is fine but lacks minerals.",
      },
    ],
  },
];

// ============================================================================
// HELPERS
// ============================================================================

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
      <div className="relative overflow-hidden h-44 sm:h-48 md:h-52 bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain object-center transition-transform duration-300"
          loading="lazy"
          decoding="async"
        />
        <div
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${badge.bg}`}
        >
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
        <div
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${badge.bg}`}
        >
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

  const allNonCommercial = useMemo(
    () => products.filter((p) => p.category !== "solar-commercial"),
    []
  );
  const commercialOnly = useMemo(() => products.filter((p) => p.category === "solar-commercial"), []);

  const filteredProducts = useMemo(() => {
    const base =
      selectedCategory === "all"
        ? allNonCommercial
        : allNonCommercial.filter((p) => p.category === selectedCategory);
    return expanded ? base : base.slice(0, 9);
  }, [selectedCategory, expanded, allNonCommercial]);

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
            Supreme solar solutions, kitchen chimneys, Kent & Aquaguard purifiers, and Luminous UPS — all optimized for
            Indian homes.
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
                  Supreme build quality and service-first support with trusted Luminous power backup and leading
                  purifier brands.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div className="rounded-2xl p-5 bg-gradient-to-br from-green-50 to-emerald-100 border border-emerald-200">
                    <div className="text-2xl">⚡</div>
                    <h4 className="mt-2 font-bold text-gray-900">Energy Savings</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      High-efficiency systems optimized for Indian conditions.
                    </p>
                  </div>
                  <div className="rounded-2xl p-5 bg-gradient-to-br from-blue-50 to-cyan-100 border border-cyan-200">
                    <div className="text-2xl">🛡️</div>
                    <h4 className="mt-2 font-bold text-gray-900">Solid Warranty</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Coverage on tanks, motors and electronics with easy claims.
                    </p>
                  </div>
                  <div className="rounded-2xl p-5 bg-gradient-to-br from-amber-50 to-orange-100 border border-orange-200">
                    <div className="text-2xl">👨‍🔧</div>
                    <h4 className="mt-2 font-bold text-gray-900">Pro Installation</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Neat, safe installs by trained technicians with site checks.
                    </p>
                  </div>
                  <div className="rounded-2xl p-5 bg-gradient-to-br from-fuchsia-50 to-pink-100 border border-pink-200">
                    <div className="text-2xl">📞</div>
                    <h4 className="mt-2 font-bold text-gray-900">Fast Support</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      WhatsApp-friendly support, calls, and scheduled visits.
                    </p>
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

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
          >
            <div className="relative bg-white rounded-t-2xl sm:rounded-2xl overflow-hidden w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-9 h-9 sm:w-10 sm:h-10 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-500 text-lg z-10 transition-colors"
                aria-label="Close"
              >
                ×
              </button>

              {/* Product Image */}
              <div className="relative h-52 sm:h-64 bg-white">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain object-center"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${getCategoryColor(selectedProduct.category)} opacity-0`}
                />
                <div
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                    getCategoryBadge(selectedProduct.category).bg
                  }`}
                >
                  {getCategoryBadge(selectedProduct.category).icon}{" "}
                  {getCategoryBadge(selectedProduct.category).label}
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
                    <div className="text-xs sm:text-sm text-blue-700">Warranty</div>
                  </div>
                </div>

                {/* Features */}
                {Array.isArray(selectedProduct.features) && selectedProduct.features.length > 0 && (
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
                )}

                {/* Specifications */}
                {selectedProduct.specs && (
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Specifications</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {Object.entries(selectedProduct.specs).map(([k, v]) => (
                        <div key={k} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                          <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                            {k
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())
                              .trim()}
                          </div>
                          <div className="text-sm font-semibold text-gray-900 mt-1">{String(v)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* FAQs */}
                {Array.isArray(selectedProduct.faqs) && selectedProduct.faqs.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Frequently Asked Questions</h4>
                    <div className="space-y-3">
                      {selectedProduct.faqs.map((item, idx) => (
                        <details key={idx} className="border border-gray-200 rounded-lg group">
                          <summary className="flex items-center cursor-pointer p-4 hover:bg-gray-50">
                            <span className="font-semibold text-gray-900 text-sm sm:text-base">
                              {item.q}
                            </span>
                            <span className="ml-auto text-gray-500 group-open:rotate-180 transition-transform">
                              ▼
                            </span>
                          </summary>
                          <div className="px-4 pb-4 pt-0 text-gray-700 text-sm sm:text-base border-t">
                            {item.a}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )}

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
                      className="flex-1 text-center px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 font-semibold"
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
