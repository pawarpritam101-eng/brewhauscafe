// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";

const team = [
  { name: "Arjun Kulkarni", role: "Head Barista",     emoji: "👨‍🍳", bio: "15 years crafting espresso in Italy, Tokyo & now Pune." },
  { name: "Meera Joshi",    role: "Pastry Chef",       emoji: "👩‍🍳", bio: "Le Cordon Bleu trained. She speaks in croissant layers." },
  { name: "Dev Patel",      role: "Coffee Sourcer",    emoji: "🧑‍🌾", bio: "Travels to farms across Kerala, Coorg & Chikmagalur." },
  { name: "Lila Nair",      role: "Head of Hospitality", emoji: "👩‍💼", bio: "Every guest leaves feeling like family. That's her mission." },
];

const milestones = [
  { year: "2019", event: "Brewhaus opens on Fergusson College Road with just 6 items on the menu." },
  { year: "2020", event: "Survived the pandemic by launching our first online ordering system." },
  { year: "2021", event: "Expanded to our current space — 60 seats, a courtyard & a brew bar." },
  { year: "2022", event: "Launched Saturday Live Music sessions with local Pune artists." },
  { year: "2023", event: "Introduced seasonal menus and our in-house specialty roast." },
  { year: "2024", event: "You're here. Welcome to the next chapter. ☕" },
];

export default function About() {
  return (
    <div className="pt-20 page-enter">
      {/* Hero */}
      <div className="bg-espresso text-cream py-20 text-center">
        <span className="badge mb-4 inline-block">Est. 2019 · Pune</span>
        <h1 className="font-display text-5xl mb-4">Our Story</h1>
        <p className="text-cream/60 max-w-xl mx-auto text-lg">
          Born from a love of craft coffee and a belief that a café should feel like home.
        </p>
      </div>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="section-title mb-6">More Than a Café</h2>
        <p className="text-gray-500 leading-relaxed text-lg mb-6">
          Brewhaus began as a tiny 8-seat espresso bar. Arjun Kulkarni, after years honing his craft across
          continents, returned to Pune with a singular vision: to create a space where every cup is a conversation,
          every bite a memory, and every visit feels unhurried.
        </p>
        <p className="text-gray-500 leading-relaxed text-lg">
          Today, Brewhaus is Pune's go-to for specialty coffee, seasonal bakes and thoughtful hospitality.
          We source directly from farms, bake fresh daily, and pour every cup with intention.
        </p>
      </section>

      {/* Values */}
      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title text-center mb-10">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🌱", title: "Sustainability",  desc: "Compostable packaging, zero food waste policy, farm-direct sourcing." },
              { icon: "🤝", title: "Community",       desc: "Supporting local artists, suppliers, and neighbourhood initiatives." },
              { icon: "✨", title: "Craft",            desc: "No shortcuts. Every cup is made with skill, patience and intention." },
            ].map(v => (
              <div key={v.title} className="card p-6 text-center">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="font-display text-xl text-espresso mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="section-title text-center mb-10">Our Journey</h2>
        <div className="relative border-l-2 border-caramel/30 pl-8 space-y-8">
          {milestones.map(m => (
            <div key={m.year} className="relative">
              <div className="absolute -left-11 w-5 h-5 bg-caramel rounded-full border-4 border-white shadow" />
              <span className="font-mono text-caramel font-bold text-sm">{m.year}</span>
              <p className="text-gray-600 mt-1">{m.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-espresso py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl text-cream text-center mb-10">Meet the Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {team.map(m => (
              <div key={m.name} className="bg-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl mb-3">{m.emoji}</div>
                <h3 className="font-display text-cream text-lg">{m.name}</h3>
                <p className="text-caramel text-xs font-mono mb-2">{m.role}</p>
                <p className="text-cream/60 text-sm">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center py-16">
        <h2 className="section-title mb-4">Come Say Hello</h2>
        <p className="text-gray-500 mb-6">We'd love to have you. Tables are always available for walk-ins.</p>
        <Link to="/contact" className="btn-primary">Contact Us</Link>
      </section>
    </div>
  );
}
