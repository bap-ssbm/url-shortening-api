/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['Poppins', 'sans-serif'],
      'serif': ['Poppins', 'sans-serif'],
      'mono': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors:{
        cyan:{
          1000: 'hsl(180, 66%, 49%)'
        },
        violet:{
          1000: 'hsl(257, 27%, 26%)',
          1100: 'hsl(257, 7%, 63%)',
          1200: 'hsl(260, 8%, 14%)'
        },
        red:{
          1000:'hsl(0, 87%, 67%)'
        },
        gray:{
          1000:'hsl(0, 0%, 75%)'
        },
        blue:{
          1000:'hsl(255, 11%, 22%)'
        },
      },
    },
  },
  plugins: [],
}

