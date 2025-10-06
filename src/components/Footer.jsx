import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-800 text-white py-6 mt-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center">

        {/* Copyright */}
        <p className="text-sm text-white/90 md:text-left text-center">
          &copy; 2025 Bhairava Enterprises. All rights reserved.
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
            {/* Removed Contact Us per request */}
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            {/* Facebook */}
            {/* <a href="#" aria-label="Facebook" className="group">
              <svg
                className="w-6 h-6 fill-current text-white group-hover:text-pink-300 transition-colors"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 10-11.5 9.87v-6.98h-2.8v-2.9h2.8V9.41c0-2.75 1.64-4.27 4.15-4.27 1.2 0 2.47.22 2.47.22v2.72h-1.39c-1.37 0-1.8.86-1.8 1.75v2.1h3.07l-.49 2.9h-2.58v6.98A10 10 0 0022 12z" />
              </svg>
            </a> */}

            {/* WhatsApp replaces Twitter */}
            <a
              href="https://wa.me/918310280310?text=Hello%2C%20I%E2%80%99m%20interested%20in%20your%20products%20at%20Bharava%20Enterprises.%20Could%20you%20please%20provide%20more%20information%3F"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="group"
            >
              <svg
                className="w-6 h-6 fill-current text-white group-hover:text-green-300 transition-colors"
                viewBox="0 0 32 32"
                role="img"
              >
                <path d="M19.11 17.23c-.27-.13-1.6-.78-1.85-.87-.25-.09-.43-.13-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.35-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46-.16 0-.34-.02-.52-.02s-.48.07-.73.34c-.25.27-.96.94-.96 2.29s.99 2.66 1.13 2.85c.14.18 1.95 2.98 4.73 4.17.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31zM16.02 3.2c-7.15 0-12.95 5.8-12.95 12.95 0 2.29.6 4.45 1.64 6.31L3 29l6.72-1.76a12.86 12.86 0 006.3 1.63c7.15 0 12.95-5.8 12.95-12.95S23.17 3.2 16.02 3.2zm7.65 20.6c-1.02 1.02-2.2 1.82-3.52 2.38-1.36.58-2.8.87-4.28.87-1.77 0-3.49-.38-5.09-1.12l-.37-.17-3.79.99 1.01-3.69-.19-.38a10.78 10.78 0 01-1.15-4.86c0-5.95 4.84-10.79 10.79-10.79 2.88 0 5.58 1.12 7.61 3.16a10.71 10.71 0 013.16 7.61c0 1.48-.3 2.92-.88 4.28-.56 1.32-1.36 2.5-2.38 3.52z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/bhairava_solars?igsh=Z2xoaXdobjRoYzhw" aria-label="Instagram" className="group">
              <svg
                className="w-6 h-6 fill-current text-white group-hover:text-indigo-300 transition-colors"
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
