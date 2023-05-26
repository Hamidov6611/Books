/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        limeGreen: "#52a713",
        lightGreey: "#4c4f61",
        darkGreey: '#262940',
        primary: "#00040f",
        secondary: '#262A37',
        bgPrimary: '#EEF1F3',
        tableGreey: '#74808C',
        lightBlue: '#1181D9'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
    screen: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '921px',
      lg: '1200px',
      xl: '1700px'
    }
  },
  plugins: [],
}

