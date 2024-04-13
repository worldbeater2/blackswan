/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        navFont: ["Encode Sans Expanded", "sans-serif"],
      },
      colors:{
        'swanblack':'#252422',
        'swanslightblack' : '#403D39',
        'swanred' : '#E3655B',
        'swanash' : '#DCE0D9',
        'swanlightash' : '#F4F3EE'
      }
    },
  },
  plugins: [require("daisyui")],
}

