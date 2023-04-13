/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'main-bg-dark': '#020c1b',
        'main-bg':'#0a192f',
        'coding-color': ' #64ffda',
        'header-color': '#ccd6f6',
        'gray-light': '#ccd6f6',
        'separator': '#233554',
      },
      fontFamily :{
        'main-font': ['Poppins', 'sans-serif'],
        'coding-font': ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}

