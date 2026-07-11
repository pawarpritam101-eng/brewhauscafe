// src/pages/Contact.jsx
// TECHNOLOGIES: Custom Hook (useLocalStorage), React Hooks (useState), API simulation, Tailwind CSS
import React, { useState } from "react";
import { useLocalStorage } from "../hooks";

const INITIAL = { name: "", email: "", phone: "", guests: "2", date: "", time: "", message: "", type: "reservation" };

export default function Contact() {
  const [form,     setForm]     = useState(INITIAL);
  const [loading,  setLoading]  = useState(false);
  const [success,  setSuccess]  = useState(false);
  const [error,    setError]    = useState("");

  // HOOK: useLocalStorage — persist past reservations across sessions
  const [pastReservations, setPastReservations] = useLocalStorage("brewhaus-reservations", []);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  // TECHNOLOGY: API call simulation (would hit a real backend in production)
  const submit = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simulated API call — replace with your backend endpoint
      await new Promise(res => setTimeout(res, 1500)); // simulate network delay

      // In production: await fetch("/api/reservations", { method: "POST", body: JSON.stringify(form) })
      const reservation = { ...form, id: Date.now(), submittedAt: new Date().toLocaleString() };
      setPastReservations(prev => [reservation, ...prev.slice(0, 4)]); // keep last 5

      setSuccess(true);
      setForm(INITIAL);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 page-enter min-h-screen">
      <div className="bg-espresso text-cream py-16 text-center">
        <span className="badge mb-4 inline-block">Get in Touch</span>
        <h1 className="font-display text-5xl mb-3">Contact & Reserve</h1>
        <p className="text-cream/60 max-w-md mx-auto">Book a table, ask a question, or just say hello. We love hearing from you.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          {success ? (
            <div className="text-center py-12 bg-green-50 rounded-3xl">
              <p className="text-6xl mb-4">✅</p>
              <h2 className="font-display text-2xl text-espresso mb-2">Reservation Confirmed!</h2>
              <p className="text-gray-500 mb-6">We'll see you soon. Check your email for details.</p>
              <button onClick={() => setSuccess(false)} className="btn-primary">Make Another</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              {/* Type toggle */}
              <div className="flex gap-2 mb-2">
                {["reservation", "inquiry"].map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, type: t }))}
                    className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
                      form.type === t ? "bg-espresso text-cream" : "bg-steam text-roast"
                    }`}
                  >
                    {t === "reservation" ? "🍽 Reserve a Table" : "💬 General Inquiry"}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-espresso mb-1 block">Full Name *</label>
                  <input name="name" value={form.name} onChange={handle} required placeholder="Arjun Kulkarni" className="input-field" />
                </div>
                <div>
                  <label className="text-sm font-medium text-espresso mb-1 block">Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handle} required placeholder="you@email.com" className="input-field" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-espresso mb-1 block">Phone</label>
                  <input name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210" className="input-field" />
                </div>
                {form.type === "reservation" && (
                  <div>
                    <label className="text-sm font-medium text-espresso mb-1 block">Guests</label>
                    <select name="guests" value={form.guests} onChange={handle} className="input-field">
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>)}
                    </select>
                  </div>
                )}
              </div>

              {form.type === "reservation" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-espresso mb-1 block">Date *</label>
                    <input name="date" type="date" value={form.date} onChange={handle} required min={new Date().toISOString().split("T")[0]} className="input-field" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-espresso mb-1 block">Time *</label>
                    <select name="time" value={form.time} onChange={handle} required className="input-field">
                      <option value="">Select a slot</option>
                      {["07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-espresso mb-1 block">Message</label>
                <textarea name="message" value={form.message} onChange={handle} rows={4}
                  placeholder="Special requests, dietary needs, occasion details…"
                  className="input-field resize-none" />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button type="submit" disabled={loading} className="btn-primary w-full">
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin-slow inline-block">☕</span> Sending…
                  </span>
                ) : (
                  form.type === "reservation" ? "Reserve My Table" : "Send Message"
                )}
              </button>
            </form>
          )}

          {/* Past reservations (from localStorage) */}
          {pastReservations.length > 0 && (
            <div className="mt-8">
              <h3 className="font-display text-lg text-espresso mb-3">Your Recent Reservations</h3>
              <div className="space-y-2">
                {pastReservations.map(r => (
                  <div key={r.id} className="bg-cream rounded-xl p-3 text-sm flex justify-between">
                    <span className="font-medium">{r.date} at {r.time} · {r.guests} guests</span>
                    <span className="text-gray-400 font-mono text-xs">{r.submittedAt}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Info panel */}
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="font-display text-xl text-espresso mb-4">Find Us</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3"><span>📍</span><span>12 Fergusson College Road, Shivajinagar, Pune – 411004</span></li>
              <li className="flex items-center gap-3"><span>🕐</span><span>Monday – Sunday: 7:00 AM – 10:00 PM</span></li>
              <li className="flex items-center gap-3"><span>📞</span><span>+91 98765 43210</span></li>
              <li className="flex items-center gap-3"><span>📧</span><span>hello@brewhaus.in</span></li>
            </ul>
          </div>

          <div className="card p-6 bg-espresso text-cream">
            <h3 className="font-display text-xl mb-4">Weekend Events</h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>🎵 <strong className="text-cream">Live Music</strong> — Every Saturday, 6–9 PM</li>
              <li>☕ <strong className="text-cream">Brewing Masterclass</strong> — Sundays 10 AM (book ahead)</li>
              <li>📚 <strong className="text-cream">Book Club</strong> — Last Sunday of each month</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="font-display text-xl text-espresso mb-4">Follow Our Story</h3>
            <div className="flex gap-4">
              {[["📸", "Instagram", "@brewhauspoona"], ["🐦", "Twitter", "@brewhaus"], ["📘", "Facebook", "Brewhaus Café"]].map(([i, p, h]) => (
                <div key={p} className="text-center">
                  <div className="text-3xl mb-1">{i}</div>
                  <p className="text-xs text-gray-400 font-mono">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
