/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'main-bg':'#f57dff',
        'coding-color': ' #64ffda',
        'header-color': '#ccd6f6',
        'sm-header-color': '#8892b0'
      }
    },
  },
  plugins: [],
}

