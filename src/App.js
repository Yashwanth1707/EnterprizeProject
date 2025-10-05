import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import HomeSection from "./components/Home";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      // Show after a small scroll (e.g., > 60px)
      setVisible(window.scrollY > 60);
    }
    onScroll(); // initialize on mount
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
      className="fixed right-4 sm:right-6 bg-pink-600 text-white p-4 rounded-full shadow-lg hover:bg-pink-700 transition"
      style={{
        zIndex: 1000,
        // Lift above iOS home bar and Android gesture bar
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)",
      }}
    >
      ▲
    </button>
  );
}

function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = () => setContactModalOpen(true);
  const closeContactModal = () => setContactModalOpen(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-dvh flex flex-col"> {/* dynamic viewport-safe root */} 
      <Header
        isContactModalOpen={contactModalOpen}
        onCloseContactModal={closeContactModal}
      />

      <main className="flex-1">
        {/* Home: animate immediately */}
        <motion.section
          id="home"
          className="min-h-dvh bg-blue-50 p-6 sm:p-10"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <HomeSection />
        </motion.section>

        {/* Products: whileInView with mobile-friendly threshold */}
        <motion.section
          id="products"
          className="min-h-dvh bg-white p-6 sm:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08, margin: "0px 0px -10% 0px" }}
          variants={sectionVariants}
        >
          <ProductList
            isContactModalOpen={contactModalOpen}
            onCloseContactModal={closeContactModal}
          />
        </motion.section>

        {/* Services */}
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

        {/* About */}
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
      <ScrollToTopButton />
    </div>
  );
}

export default App;
