/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ensure 'Inter' is correctly imported and listed first.
        // This makes Inter the default sans-serif font for your project.
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        // Your existing dark-navy
        'dark-navy': '#0a192f',
        // New custom colors to match Brittany's theme more closely
        'light-navy': '#112240', // A lighter navy for backgrounds/hover
        'slate-light': '#ccd6f6', // Lighter slate for text
        'green-accent': '#64ffda', // The primary green accent color
        'grey-text': '#8892b0', // A medium grey for secondary text
        'lightest-slate': '#a8b2d1', // For main body text
      },
    },
  },
  plugins: [],
}