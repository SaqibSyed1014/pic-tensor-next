/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'loader-gradient': 'linear-gradient(337.63deg, #19161C 1.93%, rgba(251, 251, 251, 0) 81.09%, rgba(255, 255, 255, 0) 87.3%, rgba(25, 22, 28, 0.19) 101.27%)',
      },
      colors: {
        primary: '#D2FF3A',
        dark: '#0A0A0A',
        light: '#C4C4C4',
        blue: '#6843EC',
        'lime-dark': '#19161C'
      },
      container: {
        center: true,
        padding: '1rem'
      }
    },
  },
  plugins: [],
};
