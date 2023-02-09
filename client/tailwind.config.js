/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#73C9B4",
        primaryDarkColor: "#1A7F64",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
