module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      divideColor: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
