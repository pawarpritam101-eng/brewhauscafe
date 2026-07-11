// src/App.jsx
// TECHNOLOGY: React Router v6 — BrowserRouter, Routes, Route
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider }  from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar  from "./components/Navbar";
import Footer  from "./components/Footer";
import Home    from "./pages/Home";
import Menu    from "./pages/Menu";
import Cart    from "./pages/Cart";
import About   from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/"        element={<Home />}    />
                <Route path="/menu"    element={<Menu />}    />
                <Route path="/cart"    element={<Cart />}    />
                <Route path="/about"   element={<About />}   />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={
                  <div className="pt-24 min-h-screen flex items-center justify-center text-center">
                    <div>
                      <p className="text-8xl mb-6">☕</p>
                      <h1 className="font-display text-4xl text-espresso mb-4">Page Not Found</h1>
                      <p className="text-gray-400 mb-6">Looks like this page wandered off for a coffee break.</p>
                      <a href="/" className="btn-primary">Back to Home</a>
                    </div>
                  </div>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
