/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#47402a",
        "secondary":"#e3bd44",
        "tertiary":"#e3bd44",
      },
    },
    screens: {
      'lg': {'max': '2023px'},
    
         'sm': {'max': '1000px'},
    
    }

  },
  plugins: [],
}