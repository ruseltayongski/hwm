/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}',
    
    './src/**/*.{html,js}', 
    './node_modules/tw-elements/dist/js/**/*.{vue,js,ts,jsx,tsx}'
  ],
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
  theme: {
    extend: {},
  },
}
