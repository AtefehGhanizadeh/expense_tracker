/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'sm': '0 0 10px 0 rgba(6, 6, 6, 0.2)',
      }
    },
    colors:{
      'primaryColor':"#4c1d95",
      'secondaryColor':"rgb(195, 195, 233)",
      'color':"rgb(248 250 252)",
      'red':'#dc2626',
      'green':'#22c55e',
      'gray':"#9ca3af"
    },
    theme:{
      fontSize:{
        "xsm":"0.5rem"
      }
    }
  },
  plugins: [],
}

