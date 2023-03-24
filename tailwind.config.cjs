/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["cmyk", "forest"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};
