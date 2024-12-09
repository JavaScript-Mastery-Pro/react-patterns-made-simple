/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000000",
          100: "#252625",
          200: "#3a3a3a",
        },
      },
    },
  },
  plugins: [],
};
