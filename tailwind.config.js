/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        lightMiddleGreen: "#EAF6F4",
        lightGreen: "##DFF1EE",
        darkGreen: "#2A9D8F",
        whiteCard: "#FAFAFA",
        search: "#F6F8FD",
        btnNumber: "#F5F5F5",
        pudar: "#A6A6A6",
        bgGlobal: "#FEFEFE",
      },
      boxShadow: {
        navbar: "0px 31px 34px -17px rgba(0,0,0,0.1);",
        card: "0px 0px 14px 0px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
}
