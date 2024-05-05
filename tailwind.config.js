module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer')],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
}
