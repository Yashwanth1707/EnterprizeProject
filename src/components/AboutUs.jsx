import React from "react";

export default function AboutUs() {
  const mapLink = "https://maps.app.goo.gl/wnPwxPk18qcVJ5Fm7";
  return (
    <section id="about" className="bg-gradient-to-br from-slate-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left: Brand/Owner */}
          <div className="lg:w-1/2 bg-gradient-to-tr from-blue-600 via-purple-600 to-green-600 rounded-3xl p-12 text-white flex flex-col justify-center shadow-lg">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white bg-white">
                <img
                  src="/images/owner pic.jpg"
                  alt="Keerthi CM"
                  className="w-full h-full object-cover object-[50%_18%]"
                  loading="lazy"
                />
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
                Bhairava Enterprises
              </h2>

              <p className="text-sm uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full shadow">
                Owner: Keerthi CM
              </p>

              <p className="text-base md:text-lg font-light max-w-lg drop-shadow-md">
                Energy‑smart solutions for homes and businesses: Supreme Solar water heaters, Supreme kitchen chimneys, Luminous UPS backup, CCTV installation, and RO water purifiers — specified, installed, and supported end‑to‑end.
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold mt-6 drop-shadow-md">
                Vision
              </h3>
              <p className="text-lg font-light max-w-lg drop-shadow-md">
                Build a one‑stop destination for solar heating, clean kitchens, reliable backup power, security, and safe drinking water — delivered with professional installs and responsive care.
              </p>
            </div>
          </div>

          {/* Right: Company Info and Contact */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                About Us
              </h2>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed max-w-xl">
                Supreme Solar heaters (ETC/FPC with glass‑lined tanks and 50 mm PUF), Supreme chimneys (auto‑clean, 1200–1600 m³/hr), Luminous UPS/inverters (pure sine wave & Li‑ion), CCTV solutions, and RO purifiers — all under one roof.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed max-w-xl">
                From site survey and model selection to neat installation and after‑sales support, every step is handled by a trained team for long‑term performance and peace of mind.
              </p>

              <ul className="list-disc list-inside text-slate-600 space-y-3 mb-10 max-w-md">
                <li>Solar capacities from 100–3000 LPD; high‑efficiency collectors</li>
                <li>Chimneys with auto‑clean, gesture/touch control, quiet motors</li>
                <li>UPS with pure sine wave stability and lithium options</li>
                <li>CCTV with mobile viewing and reliable maintenance</li>
                <li>RO purifiers from Kent, Aquaguard, and Purocis</li>
              </ul>
            </div>

            <div className="bg-slate-100 p-8 rounded-xl shadow-sm max-w-md">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-900">
                Our Location
              </h3>
              <address className="not-italic text-slate-700 leading-relaxed mb-6">
                <strong>Bhairava Enterprises</strong><br />
                Sri Raghavendra Nilaya, <br />
                Kuvempu Nagara Main Road,<br />
                Channarayapatna, Karnataka 573116
              </address>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors mb-4"
              >
                Get Directions
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="text-slate-700 font-medium mb-1">
                Phone:{" "}
                <a className="text-indigo-600 hover:text-indigo-800" href="tel:+918310280310">
                  +91 83102 80310
                </a>
              </p>
              <p className="text-slate-700 font-medium">
                Email:{" "}
                <a className="text-indigo-600 hover:text-indigo-800" href="mailto:bhairavaek24@gmail.com">
                  bhairavaek24@gmail.com
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
