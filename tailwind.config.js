/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#2C1A0E",
        roast:    "#5C3317",
        caramel:  "#C68642",
        cream:    "#F5ECD7",
        foam:     "#FAF3E0",
        steam:    "#E8D5B7",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body:    ["'DM Sans'", "sans-serif"],
        mono:    ["'DM Mono'", "monospace"],
      },
      animation: {
        "fade-in":   "fadeIn 0.6s ease forwards",
        "slide-up":  "slideUp 0.5s ease forwards",
        "spin-slow": "spin 8s linear infinite",
        "pulse-soft":"pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn:    { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp:   { from: { opacity: 0, transform: "translateY(20px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        pulseSoft: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.6 } },
      },
    },
  },
  plugins: [],
};
