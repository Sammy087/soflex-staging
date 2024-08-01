/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ccblack-00": "var(--ccblack-00)",
        "ccinput-bg": "var(--ccinput-bg)",
        "ccwhite-ff": "var(--ccwhite-ff)",
        contrastblack: "var(--contrastblack)",
        "greygrey-400": "var(--greygrey-400)",
        "greygrey-500": "var(--greygrey-500)",
        "main-shadesmain-color": "var(--main-shadesmain-color)",
        "main-shadesmain-darker": "var(--main-shadesmain-darker)",
        "system-colors-grays-gray": "var(--system-colors-grays-gray)",
      },
    },
  },
  plugins: [],
};
