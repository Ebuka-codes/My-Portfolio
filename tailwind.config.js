/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],

  theme: {
    extend: {
      colors: {
        primary: "#28a745",
        "primary-hover": "#28a745",
        bg: "#020617",
        surface: "#0f172a",
        heading: "#ffff",
        body: "#cbd5e1",
        border: "#1e293b",
      },
    },
  },
  plugins: [],
};
