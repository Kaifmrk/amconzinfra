/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy:    { DEFAULT: "#19184C", mid: "#1B2D42", light: "#243447" },
        steel:   { DEFAULT: "#2E5077", light: "#4A7AA8" },
        gold:    { DEFAULT: "#C8963E", light: "#E8B86D", pale: "#F5E8D0" },
        cream:   "#E8EDF2",
        ink:     "#19184C",
        amber:   "#C8963E",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans:    ['"DM Sans"', "-apple-system", "sans-serif"],
        mono:    ['"DM Mono"', "monospace"],
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        pulseGold: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.4 } },
      },
      maxWidth: { "8xl": "90rem" },
    },
  },
  plugins: [],
};
