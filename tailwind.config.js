/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '4x10': '0 3.7px 10.2px rgba(0, 0, 0, 0.10)',
        '3x28': '0 3px 28px rgba(203, 203, 203, 0.25)'
      },
      fontFamily: {
        'sans': ['Futura', ...defaultTheme.fontFamily.sans],
        'gilroy': ['Gilroy-Regular', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      blue: { 
        500: "#3b82f6",
        600: "#2563eb",
        DEFAULT: "#2967F0",
        'text': "#0F38B4",
        700: "#1d4ed8",
        'line': "#4950ED",
        'question': "rgba(41, 103, 240, 0.8)"
      },
      gray:{
        'bg': '#F2F6FF',
        300: "rgb(0 0 0 / 35%)",
        DEFAULT: "#757575",
      },
      dark:{
        DEFAULT: "#0F0F10",
      },
    },
  },
  plugins: [],
};
