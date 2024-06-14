/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sedgwick: ['Sedgwick Ave', 'cursive'],
      },
      colors: {
        'dark': "#1C1C1C",
        "semi-dark": "#282828",
        'light': "#2A303C",
        'gray-dark': '#3A3A3A',
        'turquoise': "#49BFBF",
        'primary': "#554F95",
        'secondary': "#91c870",
        'neutral40': '#C6CED1',
        'neutral60': '#A1ABB4',
        'neutral80': '#70808D',

      },
    },
  },
  plugins: [],
}

