// src/data/menuData.js
export const categories = ["All", "Coffee", "Tea", "Pastry", "Breakfast", "Lunch"];

export const menuItems = [
  // COFFEE
  { id: 1, name: "Espresso Noir",      category: "Coffee",    price: 180, rating: 4.9, image: "☕", description: "Pure double-shot espresso with a rich crema. Bold and unapologetic.",  tags: ["Strong","Classic"],   prepTime: "3 min",  popular: true  },
  { id: 2, name: "Caramel Cloud Latte",category: "Coffee",    price: 280, rating: 4.8, image: "🍯", description: "Velvety oat milk latte layered with house-made caramel & sea salt foam.", tags: ["Sweet","Creamy"],   prepTime: "5 min",  popular: true  },
  { id: 3, name: "Cold Brew Reserve",  category: "Coffee",    price: 260, rating: 4.7, image: "🧊", description: "18-hour slow-brewed concentrate over handcrafted ice. Smooth & refreshing.", tags: ["Cold","Smooth"],  prepTime: "2 min",  popular: false },
  { id: 4, name: "Cortado",            category: "Coffee",    price: 200, rating: 4.6, image: "🤎", description: "Equal parts espresso and warm milk — a perfectly balanced sip.", tags: ["Balanced","Small"],  prepTime: "4 min",  popular: false },
  { id: 5, name: "Mocha Ritual",       category: "Coffee",    price: 290, rating: 4.8, image: "🍫", description: "Espresso blended with Valrhona dark chocolate & steamed whole milk.", tags: ["Chocolatey","Rich"], prepTime: "5 min", popular: true  },
  { id: 6, name: "Iced Matcha Latte",  category: "Coffee",    price: 270, rating: 4.5, image: "🍵", description: "Ceremonial grade matcha over oat milk and ice. Earthy and uplifting.", tags: ["Earthy","Healthy"], prepTime: "4 min",  popular: false },

  // TEA
  { id: 7,  name: "Masala Chai",        category: "Tea", price: 160, rating: 4.9, image: "🫖", description: "Spiced Assam tea with cardamom, ginger & cinnamon. Our soul in a cup.", tags: ["Spicy","Warm"],     prepTime: "6 min", popular: true  },
  { id: 8,  name: "Blue Pea Bloom",     category: "Tea", price: 220, rating: 4.6, image: "💙", description: "Butterfly pea flower tea that changes colour with lemon. Pure magic.", tags: ["Floral","Unique"],  prepTime: "5 min", popular: true  },
  { id: 9,  name: "Kashmiri Kahwa",     category: "Tea", price: 200, rating: 4.7, image: "🌹", description: "Green tea with saffron, rose petals, almonds & cardamom. Regal.", tags: ["Aromatic","Elegant"], prepTime: "7 min", popular: false },

  // PASTRY
  { id: 10, name: "Croissant Beurre",   category: "Pastry", price: 150, rating: 4.8, image: "🥐", description: "Laminated French croissant with 72 buttery layers. Baked fresh each morning.", tags: ["Buttery","Fresh"],  prepTime: "1 min", popular: true  },
  { id: 11, name: "Cardamom Knot",      category: "Pastry", price: 130, rating: 4.7, image: "🍞", description: "Soft Nordic-style bun swirled with cardamom sugar. Warmly intoxicating.", tags: ["Spiced","Soft"],    prepTime: "1 min", popular: false },
  { id: 12, name: "Basque Cheesecake",  category: "Pastry", price: 200, rating: 4.9, image: "🍰", description: "Gloriously burnt cheesecake — caramelised outside, silky within.", tags: ["Creamy","Indulgent"], prepTime: "1 min", popular: true  },
  { id: 13, name: "Almond Financier",   category: "Pastry", price: 110, rating: 4.5, image: "🟨", description: "French almond cakes with golden brown butter — bite-sized perfection.", tags: ["Nutty","Light"],     prepTime: "1 min", popular: false },

  // BREAKFAST
  { id: 14, name: "Avocado Toast DX",   category: "Breakfast", price: 320, rating: 4.7, image: "🥑", description: "Sourdough with smashed avo, poached egg, chilli flakes & microgreens.", tags: ["Healthy","Filling"], prepTime: "10 min", popular: true  },
  { id: 15, name: "Shakshuka",           category: "Breakfast", price: 350, rating: 4.8, image: "🍳", description: "Eggs poached in smoky spiced tomato sauce with feta & fresh herbs.", tags: ["Savoury","Bold"],   prepTime: "12 min", popular: true  },
  { id: 16, name: "Overnight Oats Bowl", category: "Breakfast", price: 260, rating: 4.6, image: "🫙", description: "Oats soaked in almond milk topped with seasonal fruits & house granola.", tags: ["Light","Healthy"],  prepTime: "2 min",  popular: false },

  // LUNCH
  { id: 17, name: "Truffle Mushroom Panini", category: "Lunch", price: 380, rating: 4.8, image: "🥪", description: "Grilled sourdough with wild mushrooms, truffle oil, brie & rocket.", tags: ["Earthy","Gourmet"],  prepTime: "12 min", popular: true  },
  { id: 18, name: "Mezze Grain Bowl",        category: "Lunch", price: 360, rating: 4.7, image: "🥗", description: "Farro, roasted veggies, hummus, olives & preserved lemon tahini.", tags: ["Fresh","Vegan"],    prepTime: "8 min",  popular: false },
  { id: 19, name: "Soup of the Day",         category: "Lunch", price: 240, rating: 4.6, image: "🍲", description: "Chef's daily creation — always seasonal, always soul-warming.", tags: ["Seasonal","Warm"],   prepTime: "5 min",  popular: false },
];

export const testimonials = [
  { id: 1, name: "Aanya Sharma",    avatar: "🧕", text: "The Caramel Cloud Latte is pure poetry. I come here every single morning!", rating: 5, location: "Koregaon Park" },
  { id: 2, name: "Rohan Mehta",     avatar: "👨‍💼", text: "Best Shakshuka in Pune. The ambiance makes you want to stay all day.", rating: 5, location: "Baner" },
  { id: 3, name: "Priya Nair",      avatar: "👩‍🎨", text: "That Blue Pea tea changed my life. I'm not joking. It turns purple!", rating: 5, location: "Aundh" },
  { id: 4, name: "Karan Joshi",     avatar: "🧑‍💻", text: "Reliable WiFi, incredible cold brew, cozy corners. My WFH haven.", rating: 4, location: "Wakad" },
];

export const galleryImages = [
  { emoji: "☕", label: "Espresso art",      desc: "Every cup, crafted." },
  { emoji: "🌿", label: "Fresh ingredients", desc: "Farm to table daily." },
  { emoji: "📚", label: "Cozy corners",      desc: "Your third space." },
  { emoji: "🎵", label: "Live music",        desc: "Weekends alive." },
  { emoji: "🥐", label: "Daily bakes",       desc: "Out of the oven." },
  { emoji: "🌅", label: "Sunrise sessions",  desc: "Open at 7 AM." },
];
