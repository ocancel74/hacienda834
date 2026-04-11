/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pool: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        sand: {
          50:  '#fdf8f0',
          100: '#faefd9',
          200: '#f5ddb2',
          300: '#edc47f',
          400: '#e4a54d',
          500: '#d9892a',
        },
      },
      fontFamily: {
        sans:  ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        waPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34,197,94,0.5)' },
          '50%':      { boxShadow: '0 0 0 12px rgba(34,197,94,0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in':    'fadeIn 0.8s ease-out forwards',
        'wa-pulse':   'waPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
