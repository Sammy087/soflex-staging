/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ccblack-00": "var(--ccblack-00)",
        "ccwhite-ff": "var(--ccwhite-ff)",
        fillsprimary: "var(--fillsprimary)",
        "fillsprimary-dark": "var(--fillsprimary-dark)",
        fillstertiary: "var(--fillstertiary)",
        "fillstertiary-dark": "var(--fillstertiary-dark)",
        graysblack: "var(--graysblack)",
        "graysblack-dark": "var(--graysblack-dark)",
        grayswhite: "var(--grayswhite)",
        "greygrey-300": "var(--greygrey-300)",
        "greygrey-500": "var(--greygrey-500)",
        labelsprimary: "var(--labelsprimary)",
        "labelsprimary-dark": "var(--labelsprimary-dark)",
        labelssecondary: "var(--labelssecondary)",
        "labelssecondary-dark": "var(--labelssecondary-dark)",
        labelstertiary: "var(--labelstertiary)",
        "labelstertiary-dark": "var(--labelstertiary-dark)",
        "main-shadesmain-color": "var(--main-shadesmain-color)",
      },
      fontFamily: {
        "body-emphasized": "var(--body-emphasized-font-family)",
        "body-regular": "var(--body-regular-font-family)",
        "callout-regular": "var(--callout-regular-font-family)",
      },
    },
  },
  plugins: [],
};
