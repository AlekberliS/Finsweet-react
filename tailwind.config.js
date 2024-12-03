/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'bg-head':'#1c1e53',
        'grey-tx':'#c8cbdc',
        'bg-gold':'#fcd980',
        'tx-cont':'#282938',
        'bg-gold-hover':'#fcd199',
        'bg-home-sec':'#f3f6fc',
        'txt-get':'#2405F2',
        'bg-home-third':'#f9fafd',
        'btn-bg':'#5239fa',
        'about-bg':'#f4f5f5',
        'about-secbg':'#e5e5e5',
        'about-thirdbg':'#eef4fa',
        'cart-bg':'#f3f6fc',
        'team-bg':'#2c2c2c',
        'feature':'#fffcf3'
      },
    },
  },
  plugins: [],
}

