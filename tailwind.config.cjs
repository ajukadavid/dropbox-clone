// tailwind.config.js

const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      ...colors,
      'navColor': '#F2EEE8',
      'footerBorderColor': '#E3DBD0',
      'buttonColor': '#0161FE',
      'bodyColor': '#1E1919',
      'btnColor': '#3983FF',
      'borderColor': '#C9C5BD',
      'imgOneColor': '#15C8EB',
      'imgTwoColor': '#FF5A1F',
      'lifeColor': '#FFAFA5',
      'hikeColor': '#9B0032',
      'homeColor': '#FA551F',
      'artColor': '#017791',
      'officeColor': '#B4DC19',
      'sophiaColor': '#78286E',
      'glassColor': '#FFAFA5',
      'lastColor': '#FAD24B'
      
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
