module.exports = {
  purge: false,
  // ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx']
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      minHeight: {
        500: '500px',
      },
      maxHeight: {
        500: '500px',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
