/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#722FEE',
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DCD6FE',
          300: '#C3B4FE',
          400: '#A48AFB',
          500: '#875AF8',
          600: '#722FEE',
          700: '#6A26DB',
          800: '#5820B7',
          900: '#4A1C96',
          950: '#2D1159'
        },
        neutral: {
          DEFAULT: '#19181B',
          50: '#F7F7F8',
          100: '#EFEEFO',
          200: '#DBD9DE',
          300: '#BAB8C1',
          400: '#94919F',
          500: '#777384',
          600: '#615D6C',
          700: '#4F4C58',
          800: '#44414B',
          900: '#3B3941',
          950: '#19181B',
        },
        amber: {
          250: '#fcd34d',
        },
        pink: {
          350: '#f472b6',
        },
        purple: {
          450: '#a855f7',
        },
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};