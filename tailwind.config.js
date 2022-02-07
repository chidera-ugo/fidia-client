module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['IBM Plex Sans Thai Looped'],
        secondary: ['Josefin Sans'],
      },
      fontSize: {
        '7.5xl': '5.5rem',
      },
      colors: {
        primary: {
          pink: '#f91e68',
          'dark-blue': '#000033',
          'light-blue': '#5E72EB',
        },
        gradient: {
          'hero-blue': '#034389',
          'hero-dark': '#190812',
          'left-dark': '#241124',
        },
      },
      screen: {
        mobile: '480px',
      },
      maxWidth: {
        tablet: '1280px',
      },
      spacing: {
        104: '26rem',
      },
      boxShadow: {
        pink: '2.5px 2.5px 0px #f91e68',
        white: '2.5px 2.5px 0px #ffffff',
      },
      textShadow: {
        lg: '2px 2px 0px #f91e68',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        glide: 'float 6s ease-in-out infinite',
        fleet: 'float 2s ease-in-out infinite',
        roose: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('@tailwindcss/line-clamp'),
  ],
}
