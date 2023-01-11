/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-light": "#F1F1F1",
        gray: "#C9C9C9",
        charcoal: "#353535",
        accent: "#00FF19",
      },
      fontFamily: {
        sans: [
          '"ABCMonumentGrotesk"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: ['"Tobias"'],
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
