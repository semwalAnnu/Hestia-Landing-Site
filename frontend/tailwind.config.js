/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hestia-blue': '#204B76',
        'hestia-teal': '#57A097',
        'hestia-gold': '#E1B137',
      }
    },
  },
  plugins: [],
}

