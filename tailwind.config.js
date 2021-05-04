const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.MODE !== 'development',
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.tsx'
    ],
    options: {
      safelist: ['text-fire', 'text-leaf', 'text-sun', 'text-moon', 'text-wind', 'text-frost']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        leaf: '#8aa63d',
        fire: '#e25426',
        sun: '#efac1e',
        frost: '#15c2ee',
        moon: '#1e2c35',
        wind: '#9ab0b7',
        primary: colors.blue,
        secondary: {
          ...colors.green,
          100: '#dbfde4'
        }
      },
      minHeight: theme => ({
        ...theme('spacing')
      }),
      maxHeight: theme => ({
        ...theme('spacing')
      }),
      minWidth: theme => ({
        ...theme('spacing')
      }),
      maxWidth: theme => ({
        ...theme('spacing')
      }),
      inset: theme => ({
        ...theme('spacing')
      }),
      spacing: {
        '0.5in': '0.5in',
        '1in': '1in',
        '1.5in': '1.5in',
        '2in': '2in',
        '2.5in': '2.5in',
        '3in': '3in',
        '3.5in': '3.5in',
        '4in': '4in',
        '4.5in': '4.5in',
        '5in': '5in',
        '5.5in': '5.5in',
        '6in': '6in',
        '6.5in': '6.5in',
        '7in': '7in',
        '7.5in': '7.5in',
        '8in': '8in',
        '8.5in': '8.5in',
        '9in': '9in',
        '9.5in': '9.5in',
        '10in': '10in',
        '10.5in': '10.5in',
        '11in': '11in',
        '11.5in': '11.5in',
        '12in': '12in',
        36: '9rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '100vw': '100vw',
        content: 'calc(100vh - 3rem)'
      },
      boxShadow: {
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 -1px 4px -1px rgba(0, 0, 0, 0.06)'
      },
      screens: {
        print: { raw: 'print' }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
