/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.svelte'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
