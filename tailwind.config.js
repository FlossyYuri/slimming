/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.1) 0px 4px 12px 0px,rgba(255, 255, 255, 0.5) 0px 4px 12px 0px',
      },
      colors: {
        'cricut-green': '#01C38A',
        'warning-red': '#ff3e4e',
        'cricut-gray': '#F2F2F2',
      },
    }
  },
  plugins: [],
}
