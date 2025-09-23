import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-800 text-white py-6 mt-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center">
        
        {/* Copyright */}
        <p className="text-sm text-white/90 md:text-left text-center">
          &copy; 2025 Solar Water Heater Store. All rights reserved.
        </p>
        
        {/* Links and Social */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mt-4 md:mt-0">
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-6">
            <a
              href="#privacy"
              className="text-white/80 hover:text-white transition"
              >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-white/80 hover:text-white transition"
              >
              Terms of Service
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-white transition"
              >
              Contact Us
            </a>
          </nav>
          
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="#" aria-label="Facebook" className="group">
              <svg
                className="w-6 h-6 fill-white group-hover:fill-pink-400 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 10-11.5 9.87v-6.98h-2.8v-2.9h2.8V9.41c0-2.75 1.64-4.27 4.15-4.27 1.2 0 2.47.22 2.47.22v2.72h-1.39c-1.37 0-1.8.86-1.8 1.75v2.1h3.07l-.49 2.9h-2.58v6.98A10 10 0 0022 12z" />
              </svg>
            </a>

            <a href="#" aria-label="Twitter" className="group">
              <svg
                className="w-6 h-6 fill-white group-hover:fill-purple-400 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14.85 4.48 4.48 0 001.95-2.48 9.16 9.16 0 01-2.9 1.11 4.54 4.54 0 00-7.77 4v1A12.93 12.93 0 013 4.82a4.52 4.52 0 001.4 6.05 4.48 4.48 0 01-2.05-.57v.06a4.54 4.54 0 003.64 4.44 4.5 4.5 0 004.24 3.15 9.11 9.11 0 01-4.26 1.15c-.26 0-.52 0-.77-.04a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.28 9.28 0 0023 3z" />
              </svg>
            </a>

            <a href="#" aria-label="Instagram" className="group">
              <svg
                className="w-6 h-6 fill-white group-hover:fill-indigo-400 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.71 2.6a.875.875 0 111.75 0 .875.875 0 01-1.75 0zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
