/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      screens: {
        sm: '100%',
        md: '728px',
        lg: '861px',
      },
    },
    extend: {
      colors: {
        "primary-green": '#495E57',
        "primary-yellow": '#F4CE14',
        "secondary-orange": '#EE9972',
        "secondary-light-brown": '#FBDABB',
        "secondary-white": '#EDEFEE',
        "secondary-black": '#333333'
      }
    },
  },
  plugins: [],
}

