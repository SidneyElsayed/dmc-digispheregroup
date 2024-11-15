/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    extend: {
      colors: {
        'featured-red': 'var(--featured-color-red)',
        'featured-yellow': 'var(--featured-color-yellow)',
        'featured-green': 'var(--featured-color-green)',
        'featured-blue': 'var(--featured-color-blue)',
        'base': 'var(--base-color)',
      }
    },
  },
  plugins: [],
}
