/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        body:{
          primary:'hsl(180, 8%, 52%)',
          secondry:"hsl(180, 31%, 95%)"
        }
      }
    },
  },
  plugins: [],
}