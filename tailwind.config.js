/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px', 
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        },
        bluerose : '#679BE9',
        calmrose: '#CA8379'
      },
      fontFamily:{
        'roboto':['Roboto', 'sans-serif'],
        'playfair':['Playfair Display', 'serif']
      },
      rotate: {
        '24': '24deg'
      }
    },
  },
  plugins: [],
}

