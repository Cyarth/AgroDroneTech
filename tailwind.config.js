/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
  colors: {
    farmdark: '#2c6e3e',
    farmgreen: '#4caf50',
    bgsoft: '#f3f1d4',
    textdark: '#333333',
    graysoft: '#9e9e9e',
  }
  
}
