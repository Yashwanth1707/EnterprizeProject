import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSection from "./components/Home";
import ProductList from "./components/ProductList";
import { products } from "./products";
import ProductScroller from "./components/ProductScroller";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";


function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 60);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed right-4 sm:right-6 bottom-10 sm:bottom-11 bg-pink-600 text-white w-10 h-10 text-sm rounded-full shadow-lg hover:bg-pink-700 transition flex items-center justify-center"
      style={{
        zIndex: 1000,
      }}
    >
      ▲
    </button>
  );
}

function WhatsAppButton() {
  const phone = "918310280310";
  const message = "Hi! I want to know more about your products/services.";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 sm:right-6 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 active:scale-95 transition"
      style={{
        zIndex: 1001,
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 84px)",
      }}
    >
      <FaWhatsapp size={30} />
    </a>
  );
}

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const closeContactModal = () => setContactModalOpen(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Use products from ProductList export (optionally remove commercial)
  const scrollerItems = products.filter((p) => p.category !== "solar-commercial");

  return (
    <div className="min-h-dvh flex flex-col">
      <Header isContactModalOpen={contactModalOpen} onCloseContactModal={closeContactModal} />

      <LaunchBanner />
      <main className="flex-1">
        {/* Product Scroller */}

        <div className="mt-8 sm:mt-10">
          <ProductScroller items={scrollerItems} targetId="products" />
        </div>
        <motion.section
          id="home"
          className="min-h-dvh bg-blue-50 p-6 sm:p-10"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="max-w-7xl mx-auto">
            <HomeSection />


          </div>
        </motion.section>

        <motion.section
          id="products"
          className="min-h-dvh bg-white p-6 sm:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08, margin: "0px 0px -10% 0px" }}
          variants={sectionVariants}
        >
          <ProductList isContactModalOpen={contactModalOpen} onCloseContactModal={closeContactModal} />
        </motion.section>

        <motion.section
          id="services"
          className="min-h-dvh bg-blue-100 p-6 sm:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08, margin: "0px 0px -10% 0px" }}
          variants={sectionVariants}
        >
          <Services />
        </motion.section>

        <motion.section
          id="about"
          className="min-h-dvh bg-blue-50 p-6 sm:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08, margin: "0px 0px -10% 0px" }}
          variants={sectionVariants}
        >
          <AboutUs />
        </motion.section>
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}


function LaunchBanner() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="relative bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white shadow-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-52 h-52 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex items-center justify-between gap-4">

          {/* Left Content */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">

              <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                ⚡ NEW LAUNCH
              </span>

              <h2 className="text-sm sm:text-lg md:text-xl font-bold">
                Rooftop Solar Solutions Now Available
              </h2>

              <span className="hidden sm:inline text-white/90 text-sm">
                1kW • 2kW • 3kW • 5kW • Hybrid Systems
              </span>
            </div>

            <p className="text-xs sm:text-sm text-yellow-50 mt-2 max-w-3xl">
              Reduce electricity bills with our new rooftop solar systems for homes,
              villas, offices, schools, and commercial buildings.
            </p>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#products"
              className="bg-white text-orange-600 px-5 py-2 rounded-lg font-bold hover:bg-yellow-50 transition"
            >
              Explore
            </a>

            <a
              href="https://wa.me/918310280310"
              target="_blank"
              rel="noreferrer"
              className="border border-white/50 px-5 py-2 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Get Quote
            </a>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-xl transition shrink-0"
            aria-label="Close banner"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}

