import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Menu, X } from "lucide-react"; // optional, or use emoji

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onlineStatus = useOnlineStatus();
  const isLoggedIn = btnNameReact === "Logout";

  return (
    <header className="bg-navbar shadow-2xl px-4">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center py-2">
        {/* Logo */}
        <div className="logo-container">
          <img className="w-30 sm:w-[140px]" src={LOGO_URL} alt="App logo" />
        </div>

        {/* Hamburger icon - visible only on mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-navbar-text"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex px-2 py-1 text-navbar-text items-center gap-4">
          <li className="px-2">
            <span className="hover:font-bold transition-all duration-150">
              Active: {onlineStatus ? "🌷" : "❌"}
            </span>
          </li>
          <li className="px-2">
            <Link to="/" className="font-semibold hover:underline">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about" className="font-semibold hover:underline">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact" className="font-semibold hover:underline">Contact Us</Link>
          </li>
          <li className="pr-6">
            <span className="font-semibold hover:underline">Cart</span>
          </li>
          <li className="px-2">
            <button
              className={`px-4 py-2 text-sm font-semibold text-navbar-text border-navbar-text border-2 border-x-4 rounded-2xl cursor-pointer 
              ${isLoggedIn ? "bg-navbar " : "bg-button "}`}
              onClick={() => {
                setBtnNameReact(isLoggedIn ? "Login" : "Logout");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="max-w-[1280px] mx-auto">
          <ul className="flex flex-col md:hidden gap-4 px-4 pb-4 text-navbar-text font-semibold">
          <li>Active: {onlineStatus ? "🌷" : "❌"}</li>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
          <li><span>Cart</span></li>
          <li>
            <button
              className={`px-4 py-2 text-sm font-semibold text-navbar-text border-navbar-text border-2 border-x-4 rounded-2xl cursor-pointer 
              ${isLoggedIn ? "bg-navbar " : "bg-button "}`}
              onClick={() => {
                setBtnNameReact(isLoggedIn ? "Login" : "Logout");
                setIsMenuOpen(false);
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
        </div>
        
      )}
    </header>
  );
};

export default Header;