/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'blur-in': 'blurIn 1s ease-out forwards',
      },
      keyframes: {
        blurIn: {
          '0%': {
            filter: 'blur(10px)',
            opacity: 0,
          },
          '100%': {
            filter: 'blur(0)',
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
}