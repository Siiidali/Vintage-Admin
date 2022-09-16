/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hubballi: ['Hubballi', 'sans-serif'],
      },
    },
    colors: {
      dash: '#9197B3',
      white: '#fff',
    },
  },
  plugins: [],
};
