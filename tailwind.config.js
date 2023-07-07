/** @type {import('tailwindcss').Config} */

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
    extend: {
      colors: {
        bgColor: 'var(--bgColor)',
        textColor: 'var(--textColor)',
        headerBg: 'var(--headerBg)',
      },
      boxShadow: {
        modalDarkShadow: '0px 0px 18px #0284c7',
        modalLightShadow: '0px 0px 18px #64748b',
      },
    },
  },
  darkMode: 'class',
}
