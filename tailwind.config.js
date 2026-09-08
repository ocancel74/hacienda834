/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Verde bosque — color principal (reemplaza azul pool)
        pool: {
          50:  '#f0f7f2',
          100: '#d5eadb',
          200: '#aad4b8',
          300: '#77bc92',
          400: '#4aa36d',
          500: '#2a8a4f',  // verde principal
          600: '#1a6b3a',
          700: '#145229',
          800: '#0e3a1d',
          900: '#082812',
        },
        // Dorado — acento (reemplaza sand)
        sand: {
          50:  '#fdf8ed',
          100: '#f8edcc',
          200: '#f0d899',
          300: '#c9a84c',  // dorado del logo
          400: '#b8932e',
          500: '#9a7a1f',
        },
        // Crema — fondo cálido
        cream: {
          50:  '#fdfaf4',
          100: '#f8f4ed',
          200: '#f0e8d8',
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
