/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          blue: '#2997FF',
          gray: {
            DEFAULT: '#e0e0e0',
            100: '#dddddd',
            200: '#eeeeee',
            300: '#f5f5f5',
          },
          zinc: '#f0f0f0',
        },
      },
    },
    plugins: [],
  }