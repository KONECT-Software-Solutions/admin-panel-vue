module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.625rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
  
}