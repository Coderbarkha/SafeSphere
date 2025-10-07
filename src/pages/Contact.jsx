import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) newErrors.email = "Please enter your email.";
    else if (!emailPattern.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.message.trim())
      newErrors.message = "Please enter your message.";
    else if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contact Card */}
      <div className="relative z-10 max-w-lg w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 animate-fadeIn">
        <h2 className="text-white text-3xl font-semibold text-center mb-3">
          <i className="fas fa-envelope-open-text mr-2"></i> Contact Us
        </h2>
        <p className="text-gray-200 text-center mb-6">
          Have questions or feedback? Reach out to us and we’ll get back to you
          soon!
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white mb-1 font-medium"
            >
              <i className="fas fa-user mr-2"></i>Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white mb-1 font-medium"
            >
              <i className="fas fa-envelope mr-2"></i>Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-white mb-1 font-medium"
            >
              <i className="fas fa-comment-dots mr-2"></i>Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition transform hover:-translate-y-1 shadow-md hover:shadow-blue-500/30"
          >
            <i className="fas fa-paper-plane mr-2"></i> Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-6 text-center text-gray-200">
          <p>
            <i className="fas fa-phone-alt mr-2"></i> +1 234 567 890
          </p>
          <p>
            <i className="fas fa-map-marker-alt mr-2"></i> 123 Campus Street,
            City, Country
          </p>
        </div>
      </div>
    </section>
  );
}
