/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        4.5: "1.125rem",
        21.75: "5.5rem",
        24.5: "6.125rem",
        30: "7.5rem",
      },
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        normal: "0px 1px 10px rgba(0,0,0, 0.05",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        Yekan: "Yekan",
        YekanMedium: "Yekan Medium",
        YekanBold: "Yekan bold",
      },
      letterSpacing: {
        tightest: "-.065em",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
      backgroundImage: {
        homeDesktop: "url(../images/CoffeeShop-Files/headerBgDesktop.webp)",
        homeMobile: "url(../images/CoffeeShop-Files/headerBgMobile.webp)",
        bgProducts: "url(../images/CoffeeShop-Files/body-bg.png)",
        bgCategory1:
          "url(../images/CoffeeShop-Files/categories/category-right.jpg)",
        bgCategory2:
          "url(../images/CoffeeShop-Files/categories/category-left.jpg)",
      },
    },
    screens: {
      xs: "480px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
