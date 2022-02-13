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
        primary: ['Inter'],
      },
      spacing: {
        '72px': '72px',
        '64px': '64px',
        '185px': '185px',
        '158px': '158px',
        '176px': '176px',
        '113px': '113px',
        '320px': '320px',
        '120px': '120px',
        '60px': '60px',
      },
      colors: {
        primary: {
          50: '#F9F5FF',
          600: '#7F56D9',
          700: '#6941C6',
        },
        dark: {
          900: '#101828',
          700: '#344054',
          500: '#667085',
          200: '#EAECF0',
          100: '#F2F4F7',
          50: '#F9FAFB',
          border: '#D0D5DD',
        },
        error: {
          500: '#F04438',
          700: '#B42318',
        },
        success: {
          50: '#ECFDF3',
          500: '#12B76A',
          700: '#027A48',
        },
      },
      screen: {
        mobile: '480px',
      },
      borderWidth: {
        1.5: '1.5px',
      },
      maxWidth: {
        laptop: '1280px',
      },
      minWidth: {
        laptop: '1024px',
        '180px': '180px',
      },
      boxShadow: {
        'primary-md':
          '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
