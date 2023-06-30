/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      bgColor: 'rgb(var(--bgColor))',
      textColor: 'rgb(var(--textColor))',
      buttonBg: 'rgb(var(--buttonBg))',
      ...colors,
    },
    extend: {},
  },
  plugins: [],
  prefix: '',
  important: true,
  variants: {
    extend: {},
  },
}
