/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        DEFAULT: "#ffffff",
      },
      animation: {
        "unfold-in": "unfoldIn 1s ease-out forwards",
        "unfold-out": "unfoldOut .5s ease-in forwards",
        "blow-up": "blowUp 1s ease-out forwards",
      },
      keyframes: {
        unfoldIn: {
          "0%": { transform: "scaleY(.005) scaleX(0)" },
          "50%": { transform: "scaleY(.005) scaleX(1)" },
          "100%": { transform: "scaleY(1) scaleX(1)" },
        },
        unfoldOut: {
          "0%": { transform: "scaleY(1) scaleX(1)" },
          "50%": { transform: "scaleY(.005) scaleX(1)" },
          "100%": { transform: "scaleY(.005) scaleX(0)" },
        },
        blowUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
