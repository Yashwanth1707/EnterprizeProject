import React, { useState } from "react";
import emailjs from "emailjs-com";

const inquiryOptions = [
  "Solar Water Heater 200L",
  "Solar Water Heater 100L",
  "Solar Water Heater 300L",
  "Electric Instant Geyser 15L",
  "Storage Electric Geyser 25L",
  "Gas Water Heater Instant",
  "Installation Service",
  "Maintenance & Repair",
  "System Upgrade",
  "Consultation & Design",
  "Emergency Support",
  "Performance Monitoring",
];

export default function ContactForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    inquiry: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const serviceID = "service_z3cwy6c";
    const templateID = "template_zleqksc";
    const userID = "Y1iR5oC3f-PH9RSb5";

    const templateParams = {
      from_name: form.name,
      phone: form.phone,
      city: form.city,
      inquiry_topic: form.inquiry,
      message: form.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setStatus({ success: true, message: "Thank you! We will get back to you soon." });
      setForm({ name: "", phone: "", city: "", inquiry: "", message: "" });
    } catch (error) {
      setStatus({ success: false, message: "Oops! Something went wrong. Please try again later." });
      console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-xl shadow-xl max-w-6xl w-full max-h-[90vh] overflow-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-3xl font-bold leading-none focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Left Side Content */}
        <div className="flex flex-col justify-center items-center md:items-start px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center md:text-left">
            Contact Us
          </h2>

          <p className="text-blue-600 font-semibold mb-4 text-center md:text-left">
            📞 Call us at{" "}
            <a href="tel:+919876543210" className="underline hover:text-blue-800">
              +91 98765 43210
            </a>
          </p>

          <p className="text-gray-700 text-sm mb-6 max-w-md text-center md:text-left">
            Please provide your contact details and choose the inquiry topic that best fits your needs.
            Include any specific questions or requirements in the message box, so we can assist you better.
          </p>
        </div>

        {/* Right Side Form */}
        <form onSubmit={handleSubmit} className="space-y-4 px-4">
          <input
            name="name"
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            disabled={loading}
            required
            placeholder="Full Name"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:border-pink-500 transition duration-150"
          />

          <input
            name="phone"
            id="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            disabled={loading}
            required
            placeholder="Phone Number"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:border-pink-500 transition duration-150"
          />

          <input
            name="city"
            id="city"
            type="text"
            value={form.city}
            onChange={handleChange}
            disabled={loading}
            required
            placeholder="City"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:border-pink-500 transition duration-150"
          />

          <select
            name="inquiry"
            id="inquiry"
            value={form.inquiry}
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:border-pink-500 transition duration-150"
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
            id="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            disabled={loading}
            placeholder="Your message / requirements"
            className="w-full resize-y rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-500 transition duration-150"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-pink-600 py-3 text-white font-semibold tracking-wide shadow-md hover:bg-pink-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`mt-6 text-center font-semibold ${status.success ? "text-green-600" : "text-red-600"
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
