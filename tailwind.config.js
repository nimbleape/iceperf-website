/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/preline/preline.js'],
  theme: {
    extend: {
      colors: {
        ipblue: {
          100: '#c2def5',
          800: '#2c8ddd',
          900: '#12446e'
        },
        greenGood: {
          DEFAULT: colors.emerald[700],
          dark: colors.emerald[300],
        },
        redBad: {
          DEFAULT: colors.pink[700],
          dark: colors.pink[300],
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }
  },
  darkMode: 'false',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('preline/plugin'),
  ],
};
