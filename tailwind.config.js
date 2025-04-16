/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondo general y crema base
        bgsoft: '#f3f1d4',
        cream: '#fefbe9',
        
        // Verdes principales
        farmdark: '#2c6e3e',   // Verde principal oscuro
        farmgreen: '#4caf50',  // Verde botón principal
        greenaccent: '#66bb6a', // Verde más vibrante

        // Footer y bordes vegetales
        footer: '#4c6b4d',
        ringlight: 'rgba(255, 255, 255, 0.1)',

        // Texto
        textdark: '#333333',
        graysoft: '#9e9e9e',
        graylight: '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
