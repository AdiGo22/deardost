/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f0d23',
        secondary: '#A8B5DB',
        accent: '#ffd96a',
        deep: '#151312',
        faded: '#dbeafe',
      },
    },
  },
  plugins: [],
}

