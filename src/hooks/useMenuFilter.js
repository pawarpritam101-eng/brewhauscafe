
import { useState, useMemo } from "react";
import { menuItems } from "../data/menuData";
import { useDebounce } from "./useDebounce";

export function useMenuFilter() {
  const [category,    setCategory]    = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy,      setSortBy]      = useState("popular");


  const debouncedSearch = useDebounce(searchQuery, 400);


  const filtered = useMemo(() => {
    let result = [...menuItems];


    if (category !== "All")
      result = result.filter(i => i.category === category);

    if (debouncedSearch.trim()) {
      const q = debouncedSearch.toLowerCase();
      result = result.filter(i =>
        i.name.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q) ||
        i.tags.some(t => t.toLowerCase().includes(q))
      );
    }


    switch (sortBy) {
      case "popular":    result.sort((a, b) => b.popular - a.popular);     break;
      case "rating":     result.sort((a, b) => b.rating  - a.rating);      break;
      case "price-asc":  result.sort((a, b) => a.price   - b.price);       break;
      case "price-desc": result.sort((a, b) => b.price   - a.price);       break;
      default: break;
    }

    return result;
  }, [category, debouncedSearch, sortBy]);

  return {
    filtered,
    category,    setCategory,
    searchQuery, setSearchQuery,
    sortBy,      setSortBy,
  };
}
