import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; // npm i react-icons
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
      className="fixed right-4 sm:right-6 bg-pink-600 text-white p-4 rounded-full shadow-lg hover:bg-pink-700 transition"
      style={{
        zIndex: 1000,
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)",
      }}
    >
      ▲
    </button>
  );
}

function WhatsAppButton() {
  const phone = "918310280310"; // TODO: change to your WhatsApp number (countrycode+number; no +, spaces) [web:1]
  const message = "Hi! I want to know more about your products/services.";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`; // click-to-chat + URL-encoded text [web:1]

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 sm:right-6 flex items-center justify-center
                 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg
                 hover:bg-green-600 active:scale-95 transition"
      style={{
        zIndex: 1001,
        // keep it above the gesture bar and above the scroll-to-top button
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 84px)",
      }}
    >
      <FaWhatsapp size={30} />
    </a>
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
    <div className="min-h-dvh flex flex-col">
      <Header
        isContactModalOpen={contactModalOpen}
        onCloseContactModal={closeContactModal}
      />

      <main className="flex-1">
        <motion.section
          id="home"
          className="min-h-dvh bg-blue-50 p-6 sm:p-10"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <HomeSection />
        </motion.section>

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

export default App;
