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
      const scrollPosition = window.scrollY + window.innerHeight;
      const nearBottom = document.documentElement.scrollHeight - scrollPosition < 100;
      setVisible(nearBottom);
    }
    window.addEventListener("scroll", onScroll);
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
      className="fixed bottom-8 right-8 bg-pink-600 text-white p-4 rounded-full shadow-lg hover:bg-pink-700 transition"
      style={{ zIndex: 1000 }}
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
    <div>
      <Header
        isContactModalOpen={contactModalOpen}
        onCloseContactModal={closeContactModal}
      />

      <main>
        <motion.section
          id="home"
          className="min-h-screen bg-blue-50 p-10"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <HomeSection />
        </motion.section>

        <motion.section
          id="products"
          className="min-h-screen bg-white p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <ProductList
            isContactModalOpen={contactModalOpen}
            onCloseContactModal={closeContactModal}
          />
        </motion.section>

        <motion.section
          id="services"
          className="min-h-screen bg-blue-100 p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Services />
        </motion.section>

        <motion.section
          id="about"
          className="min-h-screen bg-blue-50 p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
