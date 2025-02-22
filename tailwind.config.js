/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",  
  ],
  theme: {
    extend: {
      zIndex: {
        '1': '1', 
      }
    },
  },
  plugins: [],
};
