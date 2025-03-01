/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./themes/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./assets/js/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-135': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-135-hover': 'linear-gradient(135deg, var(--tw-gradient-stops-hover))',
      },
      fontFamily: {
        fira: ["Fira Code", "monospace"],
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            '> ul > li > input:first-child': {
              marginTop: 0,
            },
            '> ul > li > input:last-child': {
              marginBottom: 0,
            },
            '> ol > li > input:first-child': {
              marginTop: 0,
            },
            '> ol > li > input:last-child': {
              marginBottom: 0,
            },
            '.gist .highlight tbody tr': {
              borderWidth: 0,
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
