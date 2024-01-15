/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      /* // you can configure the container to be centered
      center: true, */

      // or have default horizontal padding
      padding: '1rem',

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

