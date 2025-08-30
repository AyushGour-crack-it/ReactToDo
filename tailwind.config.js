
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        balooBhai: ["Baloo Bhai 2", "cursive"],
        balooBhaina: ["Baloo Bhaina 2", "cursive"],
      },
    },
  },
  plugins: [],
}
