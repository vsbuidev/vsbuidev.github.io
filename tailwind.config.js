/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#ffffff",
          text: "#282828",
        },
        dark: {
          bg: "#282828",
          text: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
