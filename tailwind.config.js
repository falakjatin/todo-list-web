/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  prefix: '',
  important: true,
  variants: {
    extend: {},
  },
  theme: {
    colors: {
      bgColor: 'var(--bgColor)',
      textColor: 'var(--textColor)',
      headerBg: 'var(--headerBg)',
      ...colors
    }
  },
  darkMode: 'class',
}
