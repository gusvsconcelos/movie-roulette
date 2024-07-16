/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        brute: '3px 3px 0 rgb(0 0 0)',
      },
    },
  },
  plugins: [],
};
