/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',    // Incluir todos los archivos en la carpeta pages
    './components/**/*.{js,jsx,ts,tsx}', // Incluir todos los archivos en la carpeta components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
