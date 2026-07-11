
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/70 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">☕</span>
            <span className="font-display text-cream text-xl">Brewhaus Café</span>
          </div>
          <p className="text-sm leading-relaxed">
            Crafted with love in Pune since 2019. Every cup tells a story — come be part of ours.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display text-cream mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {["/menu", "/about", "/gallery", "/contact"].map(path => (
              <li key={path}>
                <Link to={path} className="hover:text-caramel transition-colors capitalize">
                  {path.replace("/", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="font-display text-cream mb-4">Visit Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 12 Fergusson College Rd, Pune</li>
            <li>🕐 7:00 AM – 10:00 PM Daily</li>
            <li>📞 +91 98765 43210</li>
            <li>📧 hello@brewhaus.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-xs">
        © 2024 Brewhaus Café. 
      </div>
    </footer>
  );
}
