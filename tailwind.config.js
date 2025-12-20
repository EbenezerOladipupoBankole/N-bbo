/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        nibbo: {
          green: '#064e3b',
          orange: '#f97316',
          lemon: '#a3e635',
          light: '#f0fdf4',
        },
      }
    },
  },
}