module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['"Poppins"', 'sans-serif'],
      'body': ['"Poppins"', 'sans-serif'],
      'mono': ['"Roboto Mono"', 'monospace']
    },
    container: (theme) => ({
      // To center containers by default
      center: true,
    }),
    extend: {
      colors: {
        white: "#FFF",
        orange: {
          DEFAULT: "#FF4000"
        },
        gray: {
          "900": "#191d23",
          "800": "#20252d",
          "700": "#353e4a",
          "600": "#4a5668",
          "500": "#606f86",
          "400": "#79889f",
          "300": "#97a3b5",
          "200": "#b5bdca",
          "100": "#d2d7df",
          "50": "#f0f2f4"
        }
      },
      boxShadow: {
        elevate1: "-2px 2px 0px -2px #121519",
        elevate2: "-10px 10px 0px -2px #121519"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
