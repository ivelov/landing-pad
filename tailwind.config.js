/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      blue: { 
        500: "#3b82f6",
        600: "#2563eb",
        DEFAULT: "#2967F0",
        700: "#1d4ed8",
      },
    },
  },
  plugins: [],
};
