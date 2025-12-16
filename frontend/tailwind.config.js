/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/context/**/*.{js,jsx,ts,tsx}",
  
  ],
  theme: {
    extend: {},
  },
  
      fontFamily: {
        arabic: ["Cairo", "sans-serif"], // for Arabic
        sans: ["Inter", "sans-serif"], // default for English
      },
    
  
  plugins: [require("tailwindcss-rtl")],

};
