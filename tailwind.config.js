/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        brute: '4px 4px 0 rgb(0 0 0)',
      },
      boxShadow: {
        brute: '6px 6px 0 rgb(0 0 0)',
        header: '0 4px 0 rgb(0 0 0)',
        button: '4px 4px 0 rgb(0 0 0)',
      },
      fontFamily: {
        title: ['Big Shoulders Display', 'sans-serif'],
        ui: ['Archivo Narrow', 'sans-serif'],
        bolder: ['Bebas Neue', 'monospace'],
      },
    },
  },
  plugins: [],
};
