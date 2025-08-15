/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ['var(--font-bellefair)'],
        barlow: ['var(--font-barlow)'],
        condensed: ['var(--font-barlow-condensed)'],
      },
    },
  },
  plugins: [],
};