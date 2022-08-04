// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      'navColor': '#F2EEE8',
      'footerBorderColor': '#E3DBD0'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
