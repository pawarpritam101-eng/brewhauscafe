// src/pages/Cart.jsx
// TECHNOLOGY: Context API (useCart), React Router (useNavigate), Hooks (useState)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, removeItem, updateQty, clearCart, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();
  const [ordered, setOrdered] = useState(false);
  const [coupon,  setCoupon]  = useState("");
  const [discount, setDiscount] = useState(0);

  const VALID_COUPONS = { BREW10: 10, FIRST20: 20, CAFE15: 15 };

  const applyCoupon = () => {
    const pct = VALID_COUPONS[coupon.toUpperCase()];
    if (pct) { setDiscount(pct); alert(`✅ Coupon applied! ${pct}% off.`); }
    else alert("❌ Invalid coupon code.");
  };

  const discountAmt = Math.round(totalPrice * discount / 100);
  const gst         = Math.round((totalPrice - discountAmt) * 0.05);
  const grandTotal  = totalPrice - discountAmt + gst;

  const handleOrder = () => {
    setOrdered(true);
    clearCart();
  };

  if (ordered) return (
    <div className="pt-24 min-h-screen flex items-center justify-center page-enter">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6 animate-spin-slow inline-block">☕</div>
        <h1 className="font-display text-4xl text-espresso mb-4">Order Confirmed!</h1>
        <p className="text-gray-500 mb-2">Your order is being prepared with love. ☁️</p>
        <p className="text-sm text-caramel font-mono mb-8">Estimated time: 15–20 minutes</p>
        <button onClick={() => { setOrdered(false); navigate("/menu"); }} className="btn-primary">
          Order More →
        </button>
      </div>
    </div>
  );

  if (items.length === 0) return (
    <div className="pt-24 min-h-screen flex items-center justify-center page-enter">
      <div className="text-center">
        <p className="text-7xl mb-6">🛒</p>
        <h2 className="font-display text-3xl text-espresso mb-3">Your cart is empty</h2>
        <p className="text-gray-400 mb-6">Add something delicious from our menu!</p>
        <button onClick={() => navigate("/menu")} className="btn-primary">Browse Menu</button>
      </div>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen page-enter">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-4xl text-espresso">Your Cart</h1>
          <button onClick={clearCart} className="text-sm text-red-400 hover:text-red-600 transition">
            Clear All
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Items list */}
          <div className="md:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.id} className="bg-white rounded-2xl p-5 shadow-md flex items-center gap-5">
                <span className="text-5xl">{item.image}</span>
                <div className="flex-1">
                  <h3 className="font-display text-lg text-espresso">{item.name}</h3>
                  <p className="text-caramel font-mono font-bold">₹{item.price}</p>
                </div>
                {/* Qty control */}
                <div className="flex items-center gap-2 bg-cream rounded-full px-3 py-1">
                  <button
                    onClick={() => item.qty === 1 ? removeItem(item.id) : updateQty(item.id, item.qty - 1)}
                    className="w-6 h-6 flex items-center justify-center text-espresso font-bold hover:text-red-500 transition"
                  >−</button>
                  <span className="font-mono font-bold text-espresso w-5 text-center">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="w-6 h-6 flex items-center justify-center text-espresso font-bold hover:text-green-600 transition"
                  >+</button>
                </div>
                <p className="font-bold text-espresso font-mono w-20 text-right">₹{item.price * item.qty}</p>
                <button onClick={() => removeItem(item.id)} className="text-gray-300 hover:text-red-500 transition">✕</button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-md h-fit space-y-4">
            <h2 className="font-display text-xl text-espresso border-b border-steam pb-3">Order Summary</h2>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal ({totalItems} items)</span>
              <span className="font-mono">₹{totalPrice}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-sm text-green-600">
                <span>Discount ({discount}%)</span>
                <span className="font-mono">−₹{discountAmt}</span>
              </div>
            )}

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">GST (5%)</span>
              <span className="font-mono">₹{gst}</span>
            </div>

            <div className="flex justify-between font-bold text-espresso border-t border-steam pt-3">
              <span className="font-display text-lg">Total</span>
              <span className="font-mono text-xl text-caramel">₹{grandTotal}</span>
            </div>

            {/* Coupon */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon code"
                value={coupon}
                onChange={e => setCoupon(e.target.value)}
                className="input-field text-sm py-2"
              />
              <button onClick={applyCoupon} className="bg-caramel text-white px-3 py-2 rounded-xl text-sm hover:bg-roast transition">
                Apply
              </button>
            </div>
            <p className="text-xs text-gray-400 font-mono">Try: BREW10, FIRST20, CAFE15</p>

            <button onClick={handleOrder} className="btn-primary w-full text-center">
              Place Order ☕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
