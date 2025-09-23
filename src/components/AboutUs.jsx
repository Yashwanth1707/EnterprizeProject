import React from "react";

export default function AboutUs() {
  const mapLink =
    "https://www.google.com/maps/place/123+Green+Energy+Lane,+Sun+City,+Maharashtra,+India+400001";

  return (
    <section id="about" className="bg-gradient-to-br from-slate-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left Side: Owner Info with Background */}
          <div className="lg:w-1/2 bg-gradient-to-tr from-purple-600 via-pink-600 to-red-500 rounded-3xl p-12 text-white flex flex-col justify-center shadow-lg">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                <img
                  src="https://images.unsplash.com/photo-1508214751196-bcfdcaee242b?w=800&q=60"
                  alt="Rajesh Kumar - Owner"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h2 className="text-5xl font-extrabold leading-tight drop-shadow-md">
                Rajesh Kumar
              </h2>
              <p className="text-lg font-light max-w-lg drop-shadow-md">
                A passionate visionary dedicated to revolutionizing how we harness energy. With over 15 years in solar technology, Rajesh leads our mission to bring sustainable, cutting-edge solar heating solutions to every home and business.
              </p>
              <h3 className="text-3xl font-semibold mt-8 drop-shadow-md">
                Our Vision
              </h3>
              <p className="text-xl font-light max-w-lg drop-shadow-md">
                To be the catalyst for a renewable energy revolution—empowering communities to reduce carbon footprints, cut energy bills, and embrace innovative solar solutions for a cleaner, greener future.
              </p>
            </div>
          </div>

          {/* Right Side: Company Info and Contact */}
          <div className="lg:w-1/2 flex flex-col justify-between">

            <div>
              <h2 className="text-5xl font-extrabold text-slate-900 leading-tight mb-8">
                About Us
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed max-w-xl">
                At Solar Heater, we provide innovative and sustainable hot water solutions that reduce energy consumption and carbon footprints. 
                With over a decade of expertise, we offer high-quality, efficient, and cost-effective products tailored to your needs.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed max-w-xl">
                Our certified team guides you through consultation, personalized design, expert installation, and reliable maintenance—ensuring our customers enjoy seamless service and dependable hot water for years.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-3 mb-10 max-w-md">
                <li>Industry-leading energy efficiency and durable solutions</li>
                <li>Comprehensive warranties and exceptional support</li>
                <li>Environmentally-friendly manufacturing and service</li>
                <li>Trusted by thousands of residential and commercial clients</li>
              </ul>
            </div>

            <div className="bg-slate-100 p-8 rounded-xl shadow-sm max-w-md">
              <h3 className="text-3xl font-semibold mb-6 text-slate-900">
                Our Location
              </h3>
              <address className="not-italic text-slate-700 leading-relaxed mb-6">
                <strong>Solar Heater Store</strong><br />
                123 Green Energy Lane,<br />
                Sun City, Maharashtra,<br />
                India 400001
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
              <p className="text-slate-700 font-medium mb-1">Phone: <a className="text-indigo-600 hover:text-indigo-800" href="tel:+919876543210">+91 98765 43210</a></p>
              <p className="text-slate-700 font-medium">Email: <a className="text-indigo-600 hover:text-indigo-800" href="mailto:info@solarheater.com">info@solarheater.com</a></p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
