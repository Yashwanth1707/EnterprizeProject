import React, { useState, useEffect, useRef } from "react";

export default function Services() {
  const [activeModal, setActiveModal] = useState(null); // { title, description, bullets?, images: [] }

  // Lock body scroll when modal open
  useEffect(() => {
    const original = document.body.style.overflow;
    if (activeModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = original || "";
    return () => (document.body.style.overflow = original || "");
  }, [activeModal]);

  // Add once to globals:
  // @layer utilities {
  //  .scrollbar-hidden::-webkit-scrollbar { display: none; }
  //  .scrollbar-hidden { -ms-overflow-style: none; scrollbar-width: none; }
  // }

  const galleryCctv = [
    { src: "/images/cctv2.jpg", alt: "IP CCTV camera close-up in corridor" },
    { src: "/images/cctv4.jpg", alt: "CCTV monitoring room with multiple feeds" },
    { src: "/images/cctv3.jpg", alt: "Secure server/NVR with storage array" },
    { src: "/images/cctv1.jpeg", alt: "Exam hall overview camera angle" },
  ];

  const galleryInstall = [
    { src: "/images/solar fitment1.webp", alt: "Technician installing rooftop system" },
    { src: "/images/installation2.jpg", alt: "Piping and insulation close-up" },
    { src: "/images/quality check.png", alt: "Final QC inspection checklist" },
  ];

  const galleryMaintenance = [
    { src: "/images/solar1.jpg", alt: "Descaling evacuated tubes" },
    { src: "/images/chimney1.webp", alt: "Chimney Cleaning" },
    { src: "/images/water.webp", alt: "Filter Replacement" },
  ];

  const services = [
    {
      id: 1,
      iconBg: "bg-blue-100 ring-1 ring-blue-200",
      icon: "🔧",
      title: "Professional Installation",
      description:
        "Certified technicians expertly position and install the solar water system for optimal safety and performance.",
      bullets: ["Site survey and layout", "Secure mounting and piping", "Testing and commissioning"],
      onClick: () =>
        setActiveModal({
          title: "Professional Installation",
          description:
            "From site survey to commissioning, expert teams deliver safe, code-compliant installs with neat routing and robust mounting.",
          bullets: ["Detailed survey report", "Leak checks and insulation", "Performance validation"],
          images: galleryInstall,
        }),
    },
    {
      id: 2,
      iconBg: "bg-green-100 ring-1 ring-green-200",
      icon: "⚙️",
      title: "Maintenance & Repair",
      description:
        "Annual servicing and quick repairs keep the water heater trouble-free and efficient year-round.",
      bullets: ["Annual health check", "Descaling and cleaning", "Genuine spares and warranty"],
      onClick: () =>
        setActiveModal({
          title: "Maintenance & Repair",
          description:
            "Preventive maintenance and quick repairs to maximize uptime, safety, and thermal efficiency across seasons.",
          bullets: ["Performance tune-up", "Safety checks", "Rapid fault resolution"],
          images: galleryMaintenance,
        }),
    },
    {
      id: 3,
      iconBg: "bg-amber-100 ring-1 ring-amber-200",
      icon: "📹",
      title: "Govt. CCTV for Exams",
      description:
        "Turnkey CCTV for exam centers: IP cameras, hall-wide coverage, storage, monitoring, and compliance.",
      bullets: ["Coverage: entrances, exits, desks", "Continuous recording", "Access & retention policy"],
      onClick: () =>
        setActiveModal({
          title: "Government CCTV for Examinations",
          description:
            "End-to-end deployment: survey, IP layout, PoE cabling, NVR/storage sizing, control room setup, and audit-ready documentation.",
          bullets: ["Layout and coverage plan", "Centralized monitoring", "Secure access with retention"],
          images: galleryCctv,
        }),
    },
  ];

  const guarantees = [
    {
      iconBg: "bg-green-100 ring-1 ring-green-200",
      icon: "✅",
      title: "Quality Guarantee",
      description: "10-year warranty on premium installations with trusted components.",
    },
    {
      iconBg: "bg-blue-100 ring-1 ring-blue-200",
      icon: "⚡",
      title: "Fast Service",
      description: "Same-day service calls and speedy installation turnaround.",
    },
    {
      iconBg: "bg-orange-100 ring-1 ring-orange-200",
      icon: "👥",
      title: "Expert Team",
      description: "Certified technicians with over a decade of field experience.",
    },
    {
      iconBg: "bg-purple-100 ring-1 ring-purple-200",
      icon: "🛡️",
      title: "Exam Compliance",
      description: "Coverage, access control, and retention aligned with directives.",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 relative"
      style={{
        background: "linear-gradient(120deg, #60a5fa 0%, #34d399 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Pattern Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0, transparent 60%),radial-gradient(circle at 80% 70%, rgba(255,255,255,0.07) 0, transparent 60%)",
          zIndex: 0,
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-blue-50 md:text-blue-100 max-w-2xl mx-auto">
            Everything needed for hot water and secure examinations—delivered with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 text-center mb-10 md:mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={service.onClick}
              type="button"
              className="rounded-3xl bg-white/80 shadow-md px-6 py-8 hover:shadow-xl hover:bg-white/90 transition duration-300 flex flex-col items-center w-full focus:ring-2 focus:ring-amber-300"
              style={{ backdropFilter: "blur(6px)" }}
            >
              <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4 text-3xl ${service.iconBg}`}>
                <span>{service.icon}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{service.description}</p>

              {service.bullets && (
                <ul className="mt-4 space-y-2 text-left text-gray-600 text-sm">
                  {service.bullets.map((b, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </button>
          ))}
        </div>

        {/* Guarantees */}
        <div className="mb-14 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-white drop-shadow mb-6">Guarantees</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {guarantees.map((item, idx) => (
              <div key={idx} className="rounded-3xl bg-white/80 shadow px-6 py-8 flex flex-col items-center" style={{ backdropFilter: "blur(6px)" }}>
                <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4 text-2xl ${item.iconBg}`}>
                  <span>{item.icon}</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reusable modal for all services */}
      {activeModal && (
        <ServiceModal
          title={activeModal.title}
          description={activeModal.description}
          bullets={activeModal.bullets}
          images={activeModal.images}
          onClose={() => setActiveModal(null)}
        />
      )}
    </section>
  );
}

function ServiceModal({ title, description, bullets = [], images = [], onClose }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [onClose]);

  const goTo = (i) => {
    const clamped = Math.max(0, Math.min(images.length - 1, i));
    setIndex(clamped);
    const el = trackRef.current?.children?.[clamped];
    if (el) el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      {/* Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-[92vw] max-w-5xl mx-auto overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-600 mt-1">{description}</p>
            {bullets.length > 0 && (
              <ul className="mt-2 flex flex-wrap gap-2">
                {bullets.map((b, i) => (
                  <li key={i} className="text-xs text-slate-700 bg-slate-100 rounded-full px-2.5 py-1">
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button onClick={onClose} className="px-3 py-1.5 text-slate-600 hover:text-red-600 rounded-md transition" aria-label="Close">
            ✕
          </button>
        </div>

        {/* Gallery row */}
        <div className="relative">
          <div
            ref={trackRef}
            className="snap-x snap-mandatory overflow-x-auto overflow-y-hidden scrollbar-hidden [scroll-behavior:smooth] flex gap-4 sm:gap-6 p-4 sm:p-6"
          >
            {images.map((img, i) => (
              <div key={i} className="snap-center shrink-0 w-[85%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
                <div className="rounded-xl overflow-hidden shadow bg-white">
                  <img src={img.src} alt={img.alt} className="w-full h-64 sm:h-80 md:h-96 object-cover" loading="lazy" />
                  <div className="p-4">
                    <p className="text-sm text-slate-700">{img.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-3">
            <button
              onClick={prev}
              disabled={index === 0}
              className="pointer-events-auto inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow hover:bg-white transition disabled:opacity-40"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={next}
              disabled={index === images.length - 1}
              className="pointer-events-auto inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow hover:bg-white transition disabled:opacity-40"
              aria-label="Next image"
            >
              →
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-4 border-t flex items-center justify-between">
          <div className="flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 w-2 rounded-full ${i === index ? "bg-slate-800" : "bg-slate-300"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={onClose} className="text-sm text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-md transition">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
