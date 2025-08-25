/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      screens: {
        'xs': '480px',
        '3xl': '1920px',
      },
      colors: {
        slateblue: '#2E3E4D',
        softwhite: '#EDECE8'
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        kollektif: ['Kollektif', 'sans-serif'],
        avenir: ['"Avenir LT Std"', 'sans-serif'],
      },
      keyframes: {
        pulseCustom: {
          '0%, 100%': {
            opacity: '0.4',
            transform: 'scale(1)',
          },
          '35%, 75%': {
            opacity: '0.91',
            transform: 'scale(1.3)',
          },
        },
      },
      animation: {
        pulseCustom: 'pulseCustom 10s infinite',
      },
      backgroundImage: {
        'glow-radial': 'radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.9) 80%)',
      },
      opacity: {
        85: '0.85',
      },
    },
  },
  plugins: [],
}
