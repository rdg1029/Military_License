/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'df-orange' : '#E86A33',
        'df-green' : '#41644A',
        'df-orange-opacity' : 'rgba(242, 227, 219, 0.70)',
        'df-green-opacity' : 'rgba(65, 100, 74, 0.80)',
        'df-gold' : '#FFD95A',
        'df-silver' : '#526D82',
        'df-bronze' : '#884A39',
      },
      spacing: {
        '85' : '22rem',
      },
    },
  },
  plugins: [],
}
