module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        poppinsbold: ['Poppins Bold', 'sans-serif'],
      },
      colors: {
        custom: '#F4F1ED',
        'custom-purple': '#4B1A45',
        'custom-red-2': '#E94949',
        'custom-purple-lite': '#6B5569',
        'custom-pink': '#E75FAC',
        'custom-gray': '#D3CBD2',
        'custom-red': '#E93939',
        'color-orange': '#FFA961',
      },
    },

    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1240px',
      xl: '1280px',
    },
  },
  plugins: [],
}
