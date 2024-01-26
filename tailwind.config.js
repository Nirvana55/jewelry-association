/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    screens: {
      sm: "280px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "primary-background": "#eef3f9",
      "primary-danger": "#BD2729",
      "primary-link": "#2F6BAE",
      primary: "#305586",
      navbar: "#305586",
      test: "#243C59",
      "background-primary": "#EEF3F9",
    },
    fontSize: {
      customSize: "16px",
      navbar: "16px",
      caption: "12px",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
