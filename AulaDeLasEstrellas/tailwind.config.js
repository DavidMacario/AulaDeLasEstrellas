/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundGreen: '#B5D3A1',
        pastelGreen: '#E7F1E9',
        textGreen: '#5B5941',
        hoverDarkGreen: '#8BAD90',
        Red: '#F79F79',
        Yellow: '#E3F09B',
        Orange: '#F7D08A',
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
