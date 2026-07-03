import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function InquiryForm() {
  const { ref, isVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const { name, email, destination, message } = formData;

    try {
      const response = await fetch("https://formspree.io/f/mzdldkew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, destination, message }),
      });

      if (!response.ok) throw new Error("Formspree submission failed");

      setStatus("success");

      const text = `New Travel Inquiry 🌍%0A%0AName: ${name}%0AEmail: ${email}%0ADestination: ${destination}%0AMessage: ${message}`;
      window.open(`https://wa.me/923245693908?text=${text}`, "_blank");

      setFormData({ name: "", email: "", destination: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent text-dark text-sm transition duration-300";

  return (
    <section id="contact" className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto px-6 fade-up ${isVisible ? "visible" : ""}`}
      >
        <SectionTitle subtitle="Get In Touch" title="Plan Your Dream Trip" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="text-sm font-semibold text-primary mb-1 block">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Smith"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-primary mb-1 block">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@email.com"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-primary mb-1 block">
              Preferred Destination
            </label>
            <input
              type="text"
              name="destination"
              required
              placeholder="Bali, Indonesia"
              value={formData.destination}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-primary mb-1 block">
              Your Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell us about your dream trip..."
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
          </div>
          {status === "success" && (
            <p className="text-green-600 text-sm font-semibold text-center">
              ✅ Inquiry sent! WhatsApp is opening with your details.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm font-semibold text-center">
              ❌ Something went wrong. Please try again.
            </p>
          )}
          <Button
            text={status === "loading" ? "Sending..." : "Send via WhatsApp 💬"}
            type="submit"
            variant="primary"
          />
        </form>
      </div>
    </section>
  );
}
