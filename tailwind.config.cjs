/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        grow: {
          '0%': {width: '0px'},
          '100%': {width: '100%'}
        }
      },
      animation: {
        grow: 'grow .5s ease-in-out'
      }
    },
  },
  plugins: [],
}
