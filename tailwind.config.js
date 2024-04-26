/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      primary: 'Poppins',
      Roboto: 'Roboto, sans-serif',
      jakarta: 'Plus Jakarta Sans, sans-serif',
      allura: 'Dancing Script, cursive',
      Aniyah: 'Aniyah , sans-serif'
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1234px',
      'desktop': '1500px',
      'windscreen': '1920px'
    },
    extend: {
      colors: {
        primary: '#101828',
        ouro: '#DAA520',
      },

      backgroundImage: {
        'Banner': "url('/Moraes/logo-semfundo.png')",
        'Login': "url('/Moraes/logo-semfundo.png')"
    },
  },
},
  plugins: [],
};
