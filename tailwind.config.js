/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        red: {
          500: '#ff1800',
        },
        gray: {
          400: '#707075',
          500: '#383846',
          600: '#343443',
          800: '#2c2c3b'
        }
      },
    },
  },
  plugins: [],
}