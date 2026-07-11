// src/pages/Gallery.jsx
// TECHNOLOGY: React Hooks (useState), Tailwind CSS animations
import React, { useState } from "react";
import { galleryImages } from "../data/menuData";

const extraItems = [
  { emoji: "🫶", label: "Community love",    desc: "Our regulars make us whole." },
  { emoji: "🎨", label: "Latte art",          desc: "Poured, not printed." },
  { emoji: "🌙", label: "Evening vibes",      desc: "Golden hour in a cup." },
  { emoji: "🌺", label: "Floral touches",     desc: "Fresh blooms, every table." },
  { emoji: "📖", label: "Reading nooks",      desc: "Quiet corners for slow days." },
  { emoji: "🧁", label: "Birthday specials",  desc: "We celebrate your moments." },
];

const allItems = [...galleryImages, ...extraItems];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="pt-20 page-enter min-h-screen">
      <div className="bg-espresso text-cream py-16 text-center">
        <span className="badge mb-4 inline-block">Through Our Lens</span>
        <h1 className="font-display text-5xl mb-3">Gallery</h1>
        <p className="text-cream/60 max-w-md mx-auto">Moments, flavours, and the everyday magic of Brewhaus.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allItems.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelected(img)}
              className={`
                cursor-pointer rounded-2xl overflow-hidden
                bg-gradient-to-br from-cream to-steam
                flex flex-col items-center justify-center p-6 text-center
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                animate-slide-up
                ${i % 5 === 0 ? "col-span-2 row-span-2 py-12" : ""}
              `}
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both", opacity: 0 }}
            >
              <span className={`${i % 5 === 0 ? "text-8xl" : "text-5xl"} mb-3`}>{img.emoji}</span>
              <p className="font-display text-espresso font-bold text-sm">{img.label}</p>
              <p className="text-xs text-gray-400 mt-1 font-mono">{img.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl p-12 max-w-sm text-center shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <span className="text-9xl">{selected.emoji}</span>
            <h2 className="font-display text-2xl text-espresso mt-6 mb-2">{selected.label}</h2>
            <p className="text-gray-500 text-sm mb-6">{selected.desc}</p>
            <button onClick={() => setSelected(null)} className="btn-outline text-sm">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
