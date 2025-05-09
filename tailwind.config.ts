import type { Config } from "tailwindcss";

const colors = {
  color1: "#5C2D2D",
  color2: "#FF48B6",
  color3: "#FFA740",
  color4: "#07B704",
  dark1: "#000000",
  light1: "#ffffff",
  light2: "#F7F7F9",
  light3: "#E4E6EB",
};

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fill: { ...colors },
      fontFamily: {
        sans: ["'Poppins', sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

// /** @type {import('tailwindcss').Config} */

// const colors = {
//   color1: "#5C2D2D",
//   color2: "#FF48B6",
//   color3: "#FFA740",
//   color4: "#07B704",
//   dark1: "#000000",
//   light1: "#ffffff",
//   light2: "#F7F7F9",
//   light3: "#E4E6EB",
// };

// module.exports = {
//   content: [
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/assets/**/*.{js,ts,jsx,tsx,mdx,css}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         ...colors,
//       },
//       fill: { ...colors },
//       fontFamily: {
//         sans: ["'Poppins', sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// }
