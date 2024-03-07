/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{js,ts,vue}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '576px'
      },
      colors: {
        'octobre-cream': '#f4f0ee',
        'octobre-light-blue': '#d4eced',
        'octobre-blue': '#296fe5',
        'octobre-light-ocre': '#eddfd4',
        'octobre-ocre': '#cd854c',
        'octobre-light-green': '#dde8d8', // bg mise en avant 1
        'octobre-green': '#47b283',
        'octobre-light-violet': '#eae9f7',
        'octobre-violet': '#6658ff',
        'octobre-light-grey': '#EFEFEF',
        'octobre-grey': '#757575',
        'octobre-mid-grey': '#686868',
        'octobre-dark-grey': '#1C1C1C',
      }
    },
  }
}

