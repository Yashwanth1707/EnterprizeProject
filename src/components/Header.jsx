import React, { useState } from "react";
import ContactForm from "./ContactForm";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const navigationItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "products", label: "Products", icon: "☀️" },
    { id: "services", label: "Services", icon: "🔧" },
    { id: "about", label: "About", icon: "👥" },
    { id: null, label: "Contact", icon: "📞" },
  ];

  const scrollToSection = (id) => {
    if (!id) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = (item) => {
    if (item.label === "Contact") {
      setContactModalOpen(true);
      setIsMenuOpen(false);
    } else {
      scrollToSection(item.id);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 transition-all duration-300 bg-white shadow-sm w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <div className="flex justify-between items-center py-2">
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <a href="#home">
                  <img
                    className="w-24 h-24 rounded-full shadow-[0_0_10px_4px_rgba(59,130,246,0.6)] transition-shadow duration-300 hover:shadow-[0_0_14px_6px_rgba(99,179,237,0.8)]"
                    src="/images/logo.png"
                    alt="Mobile Logo"
                  />
                </a>
                <div className="flex flex-col">
                  <h1 className="text-3xl md:text-4xl font-light text-slate-900 tracking-wide leading-tight">
                    <span className="font-semibold">Bhairava</span> Enterprises
                  </h1>
                  <p className="text-sm md:text-base text-slate-600 font-light hidden sm:block leading-relaxed mt-1">
                    Energy and safety with bhairava
                  </p>
                </div>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden md:flex justify-center space-x-6">
                {navigationItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="group relative flex items-center space-x-2 px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:text-slate-900 focus:outline-none"
                  >
                    <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                    <span className="tracking-wide">{item.label}</span>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-slate-400 group-hover:w-3/4 transition-all duration-300" />
                  </button>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <button
                className={`md:hidden p-2 rounded-lg transition-all duration-200 focus:outline-none text-slate-600 hover:bg-slate-50 hover:text-slate-800 ${
                  isMenuOpen ? "bg-slate-100 text-slate-700" : ""
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Sidebar */}
            {isMenuOpen && (
              <div className="md:hidden fixed inset-0 z-50 flex">
                <div className="flex-1 bg-black/10 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} aria-label="Close menu overlay" />
                <div
                  className={`w-72 bg-white shadow-xl transform transition-all duration-500 ease-out ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center justify-between">
                    {/* Logo inside mobile menu modal */}
                    <div className="flex items-center space-x-4">
                      <img
                        className="w-24 h-24 rounded-full shadow-[0_0_10px_4px_rgba(59,130,246,0.6)] transition-shadow duration-300 hover:shadow-[0_0_14px_6px_rgba(99,179,237,0.8)]"
                        src="/images/logo.png"
                        alt="Mobile Logo"
                      />
                      <div>
                        <h2 className="font-light text-2xl text-slate-900">Bhairava EnterPrises</h2>
                        <p className="text-base text-slate-600 font-light mt-1">Energy and safety with bhairava</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-8 h-8 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg flex items-center justify-center transition-colors"
                      aria-label="Close menu"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <nav className="py-4">
                    {navigationItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => {
                          handleNavClick(item);
                          setIsMenuOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium transition-all duration-200 group"
                      >
                        <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                          <span className="text-sm">{item.icon}</span>
                        </div>
                        <span className="text-sm tracking-wide">{item.label}</span>
                        <svg
                          className="w-4 h-4 ml-auto text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-200"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    ))}

                    <div className="px-6 mt-8">
                      <button
                        onClick={() => {
                          setContactModalOpen(true);
                          setIsMenuOpen(false);
                        }}
                        className="w-full rounded-md bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white py-3 font-semibold shadow hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 transition"
                      >
                        Contact Us
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {contactModalOpen && <ContactForm onClose={() => setContactModalOpen(false)} />}
    </>
  );
}
