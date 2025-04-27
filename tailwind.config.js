/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        brute: '4px 4px 0 rgb(35 15 10)',
      },
      boxShadow: {
        brute: '6px 6px 0 rgb(35 15 10)',
        header: '0 6px 0 rgb(35 15 10)',
        button: '4px 4px 0 rgb(35 15 10)',
        not: '1px 1px 0 rgb(35 15 10)',
      },
      fontFamily: {
        title: ['Big Shoulders Display', 'sans-serif'],
        ui: ['Archivo Narrow', 'sans-serif'],
        bolder: ['Bebas Neue', 'monospace'],
      },
    },
  },
  plugins: [],
}
