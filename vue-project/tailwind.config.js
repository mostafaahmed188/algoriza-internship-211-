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
      },
      letterSpacing: {
        tightest: '0.32px',
      },
      backgroundImage: {
        'main': "url('./src/images/bg-main/Rectangle.png')",
        'trip-1': "url('./src/images/trip-cards/trip1.png')",
        'trip-2': "url('./src/images/trip-cards/trip2.png')",
        'trip-3': "url('./src/images/trip-cards/trip3.png')",
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '500px',
        'notice': '72px',
      },
      borderRadius: {
        'notice': '8px'
      }

    },
  },
  plugins: [],
}

