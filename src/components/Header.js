import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Menu, X, Salad } from "lucide-react";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onlineStatus = useOnlineStatus();
  const isLoggedIn = btnNameReact === "Logout";

  const cartItems = useSelector((store) => store.cart.items);

  const toggleLogin = () => {
    setBtnNameReact(isLoggedIn ? "Login" : "Logout");
  };

  const handleMobileNav = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-navbar shadow-2xl/80 shadow-navbar px-4">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center py-2">
        {/* Logo */}
        <div className="logo-container">
          <img className="w-30 sm:w-[140px]" src={LOGO_URL} alt="App logo" />
        </div>

        {/* Hamburger icon (mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-navbar-text"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex px-2 py-1 text-navbar-text items-center gap-4">
          <li className="px-2">
            <span className="hover:font-bold transition-all duration-150">
              Active: {onlineStatus ? "🌷" : "❌"}
            </span>
          </li>
          <li className="px-2">
            <Link to="/" className="font-semibold hover:underline">
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link to="/about" className="font-semibold hover:underline">
              About Us
            </Link>
          </li>
          <li className="px-2">
            <Link to="/contact" className="font-semibold hover:underline">
              Contact Us
            </Link>
          </li>

          {/* Cart Icon with Badge */}
          <li className="relative pr-6">
            <Link to="/cart" className="font-semibold hover:underline">
              <Salad size={30} />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-navbar-text text-xs font-semibold rounded-lg px-2 py-[1px] shadow-md">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>

          <li className="px-2">
            <button
              className={`px-4 py-2 text-sm font-semibold text-navbar-text border-navbar-text border-2 border-x-4 rounded-2xl cursor-pointer 
              ${isLoggedIn ? "bg-navbar" : "bg-button"}`}
              onClick={toggleLogin}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="max-w-[1280px] mx-auto">
          <ul className="flex flex-col md:hidden gap-4 px-4 pb-4 text-navbar-text font-semibold">
            <li>Active: {onlineStatus ? "🌷" : "❌"}</li>
            <li>
              <Link to="/" onClick={handleMobileNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleMobileNav}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleMobileNav}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/cart" onClick={handleMobileNav}>
                <div className="flex items-center gap-1">
                  <Salad size={22} />
                  {cartItems.length > 0 && (
                    <span className="bg-red-600 text-white text-xs font-bold rounded-full px-2 py-[1px] shadow">
                      {cartItems.length}
                    </span>
                  )}
                </div>
              </Link>
            </li>
            <li>
              <button
                className={`px-4 py-2 text-sm font-semibold text-navbar-text border-navbar-text border-2 border-x-4 rounded-2xl cursor-pointer 
                ${isLoggedIn ? "bg-navbar" : "bg-button"}`}
                onClick={() => {
                  toggleLogin();
                  handleMobileNav();
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
