/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Rouge Script", "sans-serif"],
      secondary: ["Lato", "sans-serif"]
    },
    colors:{
      'primary': 'white',
      'secondary': 'black',
      'merah': '#f87171',
      'merahTua': "#ef4444",
      'tiktok': 'black',
      'twitter': '#1DA1F2',
      'wa': '#25D366',
      'ig1': '#405DE6',
      'ig2': '#C13584',
      'ig3':'#FCAF45',
      'transparan': 'transparent',
      'btnLoginRegister': '#3a74c3'
    },
    backgroundImage: {
      'bg-photo': "url('../views/invitations/assets/IMG_8462.png')",
      'md-mode': "url('../views/invitations/assets/mdMode.png')",
      'card-photo': "url('./images/flower.png')"
    },
    extend: {},
  },
  plugins: [],
}
