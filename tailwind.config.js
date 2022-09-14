/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  important: false,
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
      source: ['Source Serif Pro', ...defaultTheme.fontFamily.sans],
      kdam: ['Kdam Thmor Pro', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        primary: '#82D9D9',
        secondary: '#6FBFBF',
        tertiary: '#010326',
        quaternary: '#393E59',
        quinary: '#F0F2F2'
      }
    }
  },
  plugins: []
}
