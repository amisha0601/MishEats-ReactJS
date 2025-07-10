import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

const Contact = () => {
  const [toast, setToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    setTimeout(() => setToast(false), 2500);
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-cardmix to-navbar px-4 py-12 flex items-center justify-center">
      
      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl/70 rounded-2xl px-5 py-6 sm:px-7 sm:py-8 text-white">
        <h2 className="text-3xl sm:text-3xl font-bold text-center mb-2">
          Contact Us
        </h2>
        <p className="text-sm text-white/70 text-center mb-6">
          Got a question or feedback? We'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1 text-white/80">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:outline-none transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-white/80">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:outline-none transition"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-1 text-white/80">
              Message
            </label>
            <textarea
              rows="3"
              placeholder="Write your message..."
              className="w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:outline-none transition resize-none"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-button hover:bg-navbar text-white font-semibold text-sm py-2.5 rounded-lg transition duration-200 shadow-md"
          >
            Send
          </button>
        </form>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white border border-green-200 shadow-md px-5 py-3 rounded-2xl flex items-center gap-2 z-50">
          <CheckCircle className="text-green-600 w-5 h-5" />
          <span className="text-green-700 text-sm font-medium">
            Message sent successfully!
          </span>
        </div>
      )}
    </div>
  );
};

export default Contact;