/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#FFF8F2",
          pink: "#FBCFE8",
          rose: "#FDA4AF",
          lavender: "#DDD6FE",
          dark: "#3B2F2F",
          muted: "#6B5B5B",
        },
      },

      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}