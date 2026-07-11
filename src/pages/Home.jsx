// src/pages/Home.jsx
// TECHNOLOGIES: React Hooks (useState, useEffect), React Router (Link/useNavigate), API (useFetch), Tailwind
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks";
import { menuItems, testimonials } from "../data/menuData";
import MenuCard from "../components/MenuCard";
import { useCart } from "../context/CartContext";

// ── Coffee Facts via public API ──────────────────────────────
function CoffeeFact() {
  // TECHNOLOGY: Custom Hook useFetch + external API call
  const { data, loading, error } = useFetch("https://catfact.ninja/fact"); // demo public API
  const [fact] = useState(
    "Did you know? Ethiopia is the birthplace of coffee. A goat herder named Kaldi first discovered the energising effect of coffee beans around 850 AD."
  );

  if (loading) return (
    <p className="text-sm text-caramel animate-pulse-soft italic font-mono">Loading today's coffee fact…</p>
  );
  if (error) return (
    <p className="text-sm text-cream/60 italic font-mono">"{fact}"</p>
  );

  // We display a static fact since the API is cat facts (just for demo of API integration)
  return <p className="text-sm text-cream/70 italic font-mono">"{fact}"</p>;
}

// ── Steam animation ──────────────────────────────────────────
function SteamCup() {
  return (
    <div className="relative inline-block">
      <span className="text-8xl">☕</span>
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1">
        <div className="w-0.5 h-6 bg-white/30 rounded steam-1" />
        <div className="w-0.5 h-8 bg-white/20 rounded steam-2" />
        <div className="w-0.5 h-5 bg-white/30 rounded steam-3" />
      </div>
    </div>
  );
}

export default function Home() {
  const navigate  = useNavigate();
  const { totalItems } = useCart();
  const featured  = menuItems.filter(i => i.popular).slice(0, 3);
  const [visible, setVisible] = useState(false);

  // HOOK: useEffect — trigger entrance animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="page-enter">
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="min-h-screen bg-espresso flex items-center relative overflow-hidden pt-16">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-6xl"
              style={{ left: `${(i * 17) % 100}%`, top: `${(i * 23) % 100}%`, opacity: 0.3 }}
            >
              ☕
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full">
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="badge mb-6 inline-block">🌿 Pune's Finest Artisan Café</span>
            <h1 className="font-display text-5xl md:text-7xl text-cream leading-tight mb-6">
              Where Every<br />
              <span className="text-caramel italic">Sip</span> Tells<br />
              a Story.
            </h1>
            <p className="text-cream/60 font-body text-lg mb-8 leading-relaxed">
              Handcrafted brews, seasonal plates & cozy corners — your daily ritual, elevated.
            </p>
            <CoffeeFact />
            <div className="flex gap-4 mt-8">
              <button onClick={() => navigate("/menu")} className="btn-primary text-base">
                Explore Menu →
              </button>
              <Link to="/about" className="btn-outline border-cream text-cream hover:bg-cream hover:text-espresso">
                Our Story
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              {[["5+", "Years"], ["50+", "Menu Items"], ["10K+", "Happy Guests"]].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl text-caramel">{n}</p>
                  <p className="text-cream/50 text-sm font-mono">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`flex justify-center transition-all duration-1000 delay-300 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <div className="relative">
              <div className="w-72 h-72 bg-caramel/20 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-caramel/30 rounded-full flex items-center justify-center">
                  <SteamCup />
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-2 text-espresso">
                <p className="font-mono text-xs text-gray-400">Today's Special</p>
                <p className="font-display font-bold">Caramel Cloud Latte</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-caramel text-white rounded-2xl shadow-xl px-4 py-2">
                <p className="font-mono text-xs opacity-70">Open Now</p>
                <p className="font-display font-bold">7 AM – 10 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED MENU ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="badge mb-3 inline-block">Chef's Picks</span>
          <h2 className="section-title">Most Loved</h2>
          <p className="text-gray-500 max-w-md mx-auto">Our guests keep coming back for these — and you will too.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <MenuCard key={item.id} item={item} delay={i * 100} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/menu" className="btn-outline">View Full Menu →</Link>
        </div>
      </section>

      {/* ── AMBIANCE STRIP ────────────────────────────────── */}
      <section className="bg-espresso py-16 text-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { icon: "🌿", title: "Farm Fresh",     desc: "Ingredients sourced from local farms every morning." },
            { icon: "🎵", title: "Live Music",      desc: "Weekends come alive with local artists performing." },
            { icon: "📶", title: "Work-Friendly",  desc: "High-speed WiFi & power outlets at every seat." },
          ].map(f => (
            <div key={f.title} className="group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <h3 className="font-display text-xl text-caramel mb-2">{f.title}</h3>
              <p className="text-cream/60 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="badge mb-3 inline-block">Guests Say</span>
          <h2 className="section-title">Loved Across Pune</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map(t => (
            <div key={t.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{t.avatar}</span>
                <div>
                  <p className="font-display font-bold text-espresso">{t.name}</p>
                  <p className="text-xs text-caramel font-mono">📍 {t.location}</p>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm leading-relaxed mb-3">"{t.text}"</p>
              <div>{"⭐".repeat(t.rating)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="bg-caramel py-16 text-center">
        <h2 className="font-display text-4xl text-white mb-4">Ready for your next cup?</h2>
        <p className="text-white/80 mb-8 font-body">Order online or walk in — we're always ready for you.</p>
        <div className="flex justify-center gap-4">
          <button onClick={() => navigate("/menu")} className="bg-white text-espresso px-8 py-3 rounded-full font-medium hover:bg-cream transition">
            Order Now
          </button>
          <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
            Reserve a Table
          </Link>
        </div>
      </section>
    </div>
  );
}
