/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(255, 255, 0, 0.1), 0 2px 4px -1px rgba(255, 255, 0, 0.06)',
      },
      animation: {
        'blur-in': 'blurIn 1s ease-out forwards',
        blurOut: 'blurOut 0.5s ease-in',
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
        blurOut: {
          '0%': { filter: 'blur(0)', opacity: 1 },
          '100%': { filter: 'blur(10px)', opacity: 0 }
        }
      },
    },
  },
  plugins: [],
}