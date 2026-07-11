import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function MenuCard({ item, delay = 0 }) {
  const { addItem, items } = useCart();
  const [added, setAdded] = useState(false);
  const inCart = items.some(i => i.id === item.id);

  const handleAdd = () => {
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div
      className="card group animate-slide-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both", opacity: 0 }}
    >
      {/* Image area */}
      <div className="bg-gradient-to-br from-cream to-steam h-40 flex items-center justify-center relative overflow-hidden">
        <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
          {item.image}
        </span>
        {item.popular && (
          <span className="absolute top-3 left-3 badge">⭐ Popular</span>
        )}
        <span className="absolute top-3 right-3 bg-espresso text-cream text-xs px-2 py-1 rounded-full font-mono">
          {item.prepTime}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-display text-lg text-espresso leading-tight">{item.name}</h3>
          <span className="font-mono font-bold text-caramel text-lg">₹{item.price}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {"★".repeat(Math.floor(item.rating)).split("").map((_, i) => (
            <span key={i} className="text-caramel text-xs">★</span>
          ))}
          <span className="text-xs text-gray-400 ml-1">{item.rating}</span>
        </div>

        <p className="text-sm text-gray-500 mb-3 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex gap-1 flex-wrap mb-4">
          {item.tags.map(tag => (
            <span key={tag} className="text-xs bg-steam text-roast px-2 py-0.5 rounded-full font-mono">
              {tag}
            </span>
          ))}
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAdd}
          className={`w-full py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
            added
              ? "bg-green-500 text-white scale-95"
              : inCart
              ? "bg-caramel/20 text-caramel border-2 border-caramel"
              : "btn-primary"
          }`}
        >
          {added ? "✓ Added!" : inCart ? "Add Again" : "+ Add to Cart"}
        </button>
      </div>
    </div>
  );
}
