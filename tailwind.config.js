/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '3px 5px 8px rgba(255, 255, 255, 0.3)',
        'custom-light-lg': '0px 10px 18px rgba(255, 255, 255, 0.3)', // Light shadow for dark backgrounds
        'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.5)', // Dark shadow for light backgrounds
      },
      scale: {
        '102': '1.02',
      },
      borderRadius: {
        'custom': '0% 5% 1% 5% / 0% 20% 0% 20%',
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