/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    ".public/index.html"
  ],
  theme: {
    extend: {
      colors:{
        'dark-background': 'var(--dark-background)',
        'dark-color': 'var(--dark-color)',
        'primary-color': 'var(--primary-color)'
      }
    },
  },
  plugins: [],
}