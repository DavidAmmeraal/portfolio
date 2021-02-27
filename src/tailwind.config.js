module.exports = {
  purge: ["./src/**/*.tsx", "./src/**/*.ts"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['"Poppins"', "sans-serif"],
      body: ['"Poppins"', "sans-serif"],
      mono: ['"Roboto Mono"', "monospace"],
    },
    extend: {
      colors: {
        white: "#FFF",
        // https://maketintsandshades.com/#FF4000
        orange: {
          900: "#992600",
          800: "#b32d00",
          700: "#cc3300",
          600: "#e63a00",
          500: "#FF4000",
          400: "#ff6633",
          300: "#ff794d",
          200: "#ff8c66",
          100: "#ffa080",
          50: "#ffb399",
        },
        gray: {
          900: "#191d23",
          800: "#20252d",
          700: "#353e4a",
          600: "#4a5668",
          500: "#606f86",
          400: "#79889f",
          300: "#97a3b5",
          200: "#b5bdca",
          100: "#d2d7df",
          50: "#f0f2f4",
        },
      },
      boxShadow: {
        elevate1: "-2px 2px 0px -2px #121519",
        elevate2: "-10px 10px 0px -2px #121519",
      },
    },
  },
  variants: {
    extend: {
      scale: ["active"],
      translate: ["active"],
      backgroundOpacity: ["active"],
    },
  },
  plugins: [],
};
