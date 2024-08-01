/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ccblack-00": "var(--ccblack-00)",
        "ccinput-bg": "var(--ccinput-bg)",
        ccwarning: "var(--ccwarning)",
        "ccwhite-ff": "var(--ccwhite-ff)",
        "greygrey-300": "var(--greygrey-300)",
        "greygrey-400": "var(--greygrey-400)",
        "main-shadesmain-color": "var(--main-shadesmain-color)",
      },
    },
  },
  plugins: [],
};
