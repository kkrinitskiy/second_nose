/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      'back-ground-color' : '#2C5663'
    },
  },
  fontFamily:{
    Roboto : ["Roboto", "sans-serif"],
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

