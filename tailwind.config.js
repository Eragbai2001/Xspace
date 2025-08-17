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
        bellefair: ["var(--font-bellefair)"],
        barlow: ["var(--font-barlow)"],
        condensed: ["var(--font-barlow-condensed)"],
      },
    },

    animation: {
      fadeIn: "fadeIn 0.5s ease-in-out",
      slideIn: "slideIn 0.3s ease-out",
      ping: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      slideIn: {
        "0%": { transform: "translateY(20px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      ping: {
        "75%, 100%": {
          transform: "scale(1.5)",
          opacity: "0",
        },
      },
    },
  },
  plugins: [],
};
