import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const hideFooterOn = ["/contact", "/about"]; // Pages where you don't want the footer

  if (hideFooterOn.includes(location.pathname)) return null;

  return (
    <footer className="w-full mt-16 bg-navbar text-white px-4 py-6 shadow-inner backdrop-blur-xl border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        
        {/* Logo */}
        <div className="font-semibold text-lg tracking-tight">
          MishEats<span className="text-button">.</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4">
          <Link to="/" className="hover:text-button transition">Home</Link>
          <Link to="/about" className="hover:text-button transition">About</Link>
          <Link to="/contact" className="hover:text-button transition">Contact</Link>
          <a href="#" className="hover:text-button transition">Terms</a>
        </div>

        {/* Credit Line */}
        <div className="text-xs text-white/80 text-center sm:text-right">
          Made by <span className="text-white font-semibold">Amisha</span> · © {new Date().getFullYear()} MishEats
        </div>
      </div>
    </footer>
  );
};

export default Footer;