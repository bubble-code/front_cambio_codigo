/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"]
      },
      backgroundImage: {
        'favram': "url('src/assets/favram01.jpg')"
      },
    },
  },
  plugins: [],
}