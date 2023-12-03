/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {},
      textColor: {
        'primary': 'var(--Gray-1, #333)',
        'secondary': '',
        'danger': '',
      },
      backgroundColor: {
        'notice': '#FCEFCA',
        'btn': 'var(--Gray-6, #F2F2F2)'
      },
      letterSpacing: {
        tightest: '0.32px',
      },
      backgroundImage: {
        'main': "url('./src/images/bg-main/Rectangle.png')",
        'trip-1': "url('./src/images/trip-cards/trip1.png')",
        'trip-2': "url('./src/images/trip-cards/trip2.png')",
        'trip-3': "url('./src/images/trip-cards/trip3.png')",
        'app': "url('./src/images/mobile-app/Rectangle 18.png')"
      },
      width: {
        'trip': '400px',
        'app': '1240px',
        'text-app': '580px',
        'btn': '134px'
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '500px',
        'notice': '72px',
        'country': '220px',
        'trip': '280px',
        'hotel': '300px',
        'app': '280px',
      },
      borderRadius: {
        'notice': '8px',
        'btn': '6px'
      },
      boxShadow: {
        '2xl': '0px 4px 37px 0px rgba(0, 0, 0, 0.15)'
      }

    },
  },
  plugins: [],
}

