const { colors, fontSize, ...theme } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/components/**/*.{js,ts,jsx,tsx}",
    "../../packages/screens/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%": { left: "-100%", opacity: 0 },
          "90%": { left: "90%", opacity: 0.99 },
          "100%": { left: "100%", opacity: 0 },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        loading: "loading 3s linear infinite",
        text: "text 10s ease infinite",
      },
      rotate: {
        135: "135deg",
      },
      backgroundImage: {
        hero: "url(/aurora-bg.webp)", //
      },
      fontFamily: {
        sans: ["CircularXXSub", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        ...fontSize,
        "3xl2": ["1.875rem", { lineHeight: "2.8125rem" }],
      },
      colors: {
        "aurora-black": "#041417",
        primary: "rgba(255, 255, 255, 0.80)",
        secondary: "hsla(0,0%,100%,.66)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
