import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const inquiryOptions = [
  // Solar heaters (Supreme)
  "Supreme Solar GL ETC 200 LPD",
  "Supreme Solar FPC 250 LPD",
  "Supreme Solar ETC 300 LPD",
  "Commercial Solar Water Heater 3000 LPD",
  "Heat Pump Water Heater 200L",

  // Kitchen chimneys (Supreme)
  "Supreme ECO H4 60 cm Auto-Clean",
  "Supreme FIGO XL 90 cm Touch",
  "Supreme CROWN X 60 cm",

  // Water purifiers
  "KENT Grand Plus RO+UV+UF+TDS 8L",
  "Aquaguard RO+UV+UF 7L",
  "Purocis RO+UV 8L",

  // Luminous UPS/Inverters
  "Luminous Zelio+ 1100 Pure Sine Wave",
  "Luminous Eco Watt Neo 1050",
  "Luminous Li-ON 1250 (In-built Lithium)",

  // Generic solar/geyser items
  "Solar Water Heater 200L",
  "Solar Water Heater 100L",
  "Solar Water Heater 300L",

  // Services
  "Installation Service",
  "Maintenance & Repair",
  "System Upgrade",
  "Consultation & Design",
  "Emergency Support",
  "Performance Monitoring",

  // Extra services
  "CCTV Camera Installation",
  "UPS Battery Replacement",
  "Chimney Deep Cleaning",
  "Water Quality/TDS Check",
];

export default function ContactForm({ onClose, selectedProduct }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
    inquiry: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  /* =========================================================
     AUTO-SELECT PRODUCT WHEN MODAL OPENS FROM PRODUCT CARD
  ========================================================= */
  useEffect(() => {
    if (selectedProduct?.name) {
      const exists = inquiryOptions.includes(selectedProduct.name);

      setForm((prev) => ({
        ...prev,
        inquiry: exists ? selectedProduct.name : "",
        message: exists
          ? prev.message
          : `I am interested in ${selectedProduct.name}. Please share details.`,
      }));
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const serviceID = "service_nx9wj7f";
    const templateID = "template_7okqlw5";
    const userID = "pVIOgGQnThYz2u_cs";

    const templateParams = {
      from_name: form.name,
      phone: form.phone,
      city: form.city,
      email: form.email,
      inquiry_topic: form.inquiry,
      message: form.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setStatus({ success: true, message: "Thank you! We will get back to you soon." });
      setForm({
        name: "",
        phone: "",
        city: "",
        email: "",
        inquiry: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        success: false,
        message: "Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-xl shadow-xl max-w-6xl w-full max-h-[90vh] overflow-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-3xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center items-center md:items-start px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Contact Us
          </h2>

          <p className="text-blue-600 font-semibold mb-4">
            📞 Call us at{" "}
            <a href="tel:+918310280310" className="underline">
              +91 8310280310
            </a>
          </p>

          <p className="text-gray-700 text-sm max-w-md">
            Fill in your details and we’ll contact you shortly with the best solution.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={handleSubmit} className="space-y-4 px-4">
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            disabled={loading}
            placeholder="Full Name"
            className="w-full rounded-md border px-4 py-2"
          />

          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            disabled={loading}
            placeholder="Phone Number"
            className="w-full rounded-md border px-4 py-2"
          />

          <input
            name="city"
            type="text"
            value={form.city}
            onChange={handleChange}
            required
            disabled={loading}
            placeholder="City"
            className="w-full rounded-md border px-4 py-2"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            disabled={loading}
            placeholder="Email (optional)"
            className="w-full rounded-md border px-4 py-2"
          />

          {/* 🔽 AUTO-SELECTED DROPDOWN */}
          <select
            name="inquiry"
            value={form.inquiry}
            onChange={handleChange}
            required
            disabled={loading || !!selectedProduct}
            className="w-full rounded-md border px-4 py-2 bg-white"
          >
            <option value="" disabled>
              Select Inquiry Topic
            </option>
            {inquiryOptions.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            disabled={loading}
            placeholder="Your message / requirements"
            className="w-full rounded-md border px-4 py-2 resize-y"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-pink-600 py-3 text-white font-semibold hover:bg-pink-700 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`text-center font-semibold ${
                status.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
