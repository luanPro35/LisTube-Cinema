/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-hover": "linear-gradient(90deg, #00f260, #0575e6, #7b2ff7)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
