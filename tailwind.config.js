/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "1x28": "0 -1px 28px rgba(203, 203, 203, 0.25)",
        "4x10": "0 3.7px 10.2px rgba(0, 0, 0, 0.10)",
        "3x28": "0 3px 28px rgba(203, 203, 203, 0.25)",
        "14x28": "0 14px 28px rgba(203, 203, 203, 0.25)",
      },
      fontFamily: {
        sans: ["Futura", ...defaultTheme.fontFamily.sans],
        gilroy: ["Gilroy-Regular", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      blue: {
        200: "#DBEBFF",
        300: "#A3ABF4",
        400: "#3060C9",
        500: "#3b82f6",
        600: "#2563eb",
        DEFAULT: "#2967F0",
        text: "#0F38B4",
        700: "#1d4ed8",
        line: "#4950ED",
        question: "rgba(41, 103, 240, 0.8)",
      },
      gray: {
        200: "#F9FBFF",
        bg: "#F2F6FF",
        300: "rgb(0 0 0 / 35%)",
        400: "#7A7A7A",
        DEFAULT: "#757575",
        text: "#B3B3B3",
        600: "#454953",
      },
      dark: {
        400: "rgba(0, 0, 0, 0.4)",
        DEFAULT: "#0F0F10",
      },
    },
  },
  plugins: [],
};
