
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart }  from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [cartBounce,   setCartBounce]   = useState(false);

  
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Animate cart icon on item add
  useEffect(() => {
    if (totalItems > 0) {
      setCartBounce(true);
      const t = setTimeout(() => setCartBounce(false), 600);
      return () => clearTimeout(t);
    }
  }, [totalItems]);

  const links = [
    { to: "/",        label: "Home"    },
    { to: "/menu",    label: "Menu"    },
    { to: "/about",   label: "About"   },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-espresso/95 backdrop-blur-md shadow-xl" : "bg-espresso"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => navigate("/")} className="flex items-center gap-2 group">
          <span className="text-2xl">☕</span>
          <span className="font-display text-cream text-xl tracking-wide group-hover:text-caramel transition-colors">
            Brewhaus
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-body transition-all duration-200 ${
                  isActive
                    ? "bg-caramel text-white"
                    : "text-cream/80 hover:text-cream hover:bg-white/10"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="text-cream/70 hover:text-cream transition-colors text-lg"
            aria-label="Toggle theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* Cart button */}
          <button
            onClick={() => navigate("/cart")}
            className={`relative bg-caramel text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium
              hover:bg-roast transition-all duration-200 ${cartBounce ? "scale-110" : "scale-100"}`}
          >
            🛒
            {totalItems > 0 && (
              <span className="bg-white text-espresso text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden text-cream text-xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-espresso border-t border-white/10 px-6 pb-4 animate-fade-in">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-3 border-b border-white/10 font-body ${
                  isActive ? "text-caramel" : "text-cream/80"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
