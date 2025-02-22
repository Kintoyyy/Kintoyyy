/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          '50': '#f4f5fe',
          '100': '#ebedfc',
          '200': '#daddfa',
          '300': '#bcc1f6',
          '400': '#9699ef',
          '500': '#6d6ce6',
          '600': '#574cdb',
          '700': '#473ac7',
          '800': '#3b30a7',
          '900': '#332989',
          '950': '#1e1a61',
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("preline/plugin")],
};
