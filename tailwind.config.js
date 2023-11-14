/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1440px',
      },
      fontFamily: {
        'sans': ['Inter']
      },
      colors: {
        'primary': '#FC5811',
        'secondary': '#1d1916',
      },
      backgroundImage: {
        'bannerOne': "url('/src/assets/bannerA.png')",
      }
    },
  },
  plugins: [],
}

