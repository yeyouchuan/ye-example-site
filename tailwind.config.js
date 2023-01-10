/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-light": "#F4F4F4",
        gray: "#D0D0D0",
        "gray-dark": "#1A1A1A",
        accent: "#00FF19",
      },
      fontFamily: {
        sans: [
          '"ABCMonumentGrotesk"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      animation: {
        bounce: "bounce 1s 1.5",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
