/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ccinput-bg": "var(--ccinput-bg)",
        "ccwhite-ff": "var(--ccwhite-ff)",
        "greygrey-300": "var(--greygrey-300)",
        "greygrey-500": "var(--greygrey-500)",
        "main-shadesmain-color": "var(--main-shadesmain-color)",
        "main-shadesmain-darker": "var(--main-shadesmain-darker)",
      },
    },
  },
  plugins: [],
};
