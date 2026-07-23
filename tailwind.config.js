/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#F5F6F8',
          100: '#E8EAED',
          200: '#CDD2D9',
          300: '#A8AFB9',
          400: '#7E8792',
          500: '#5C6470',
          600: '#414957',
          700: '#1B2430',
          800: '#141B24',
          900: '#0F141B',
          950: '#0A0D12',
        },
        paper: {
          50: '#F6F7FA',
          100: '#EEF1F6',
          200: '#E3E7EE',
          300: '#C9CFD9',
          400: '#ADB5C0',
          500: '#828B99',
        },
        gold: {
          400: '#E3BE52',
          500: '#D4A72C',
          600: '#B8890F',
        },
        teal: {
          400: '#4FB3A0',
          500: '#2F8F7E',
          600: '#226C5F',
        },
        indigo: {
          500: '#2B4FD8',
          600: '#1D3AB8',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        arabic: ['"IBM Plex Sans Arabic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
