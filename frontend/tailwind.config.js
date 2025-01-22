/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbarColor: '#043B64',
        textColor: '#FFFFFF'
      }
    },
  },
  plugins: [],
}
