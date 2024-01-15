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
    extend: {},
  },
  plugins: [],
}

