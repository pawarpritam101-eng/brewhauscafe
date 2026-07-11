// src/pages/Menu.jsx
// TECHNOLOGIES: Custom Hooks (useMenuFilter, useDebounce), Tailwind CSS, React state
import React from "react";
import { categories } from "../data/menuData";
import { useMenuFilter } from "../hooks";
import MenuCard from "../components/MenuCard";

export default function Menu() {
  // HOOK: custom useMenuFilter — filter + search + sort logic
  const { filtered, category, setCategory, searchQuery, setSearchQuery, sortBy, setSortBy } = useMenuFilter();

  return (
    <div className="pt-20 min-h-screen page-enter">
      {/* Header */}
      <div className="bg-espresso text-cream py-16 text-center">
        <span className="badge mb-4 inline-block">What We Brew</span>
        <h1 className="font-display text-5xl mb-3">Our Menu</h1>
        <p className="text-cream/60 max-w-md mx-auto">
          {filtered.length} items crafted with care. Filter, search, discover.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search — HOOK: useDebounce inside useMenuFilter */}
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Search items, ingredients, tags…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="input-field pl-12"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-espresso"
              >✕</button>
            )}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="input-field md:w-48 cursor-pointer"
          >
            <option value="popular">⭐ Popular First</option>
            <option value="rating">🏆 Highest Rated</option>
            <option value="price-asc">💰 Price: Low–High</option>
            <option value="price-desc">💎 Price: High–Low</option>
          </select>
        </div>

        {/* Category pills */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                category === cat
                  ? "bg-espresso text-cream shadow-md scale-105"
                  : "bg-steam text-roast hover:bg-espresso hover:text-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🤔</p>
            <h3 className="font-display text-2xl text-espresso mb-2">Nothing found</h3>
            <p className="text-gray-400">Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} delay={i * 60} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
