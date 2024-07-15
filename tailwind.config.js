/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      backgroundImage:{
       img1: "url('/public/bgimg.png')",
       gradient:"linear-gradient(125deg, rgba(7,0,11,1) 45%, rgba(62,2,57,1) 100%, rgba(0,212,255,1) 100%);"

      },
      backgroundColor: {
        test: '#ff0000',
      },
    },
  },
  plugins: [],
}