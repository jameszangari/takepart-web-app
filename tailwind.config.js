module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gasGiant: "#2e2d71",
        neptuneLike: "#36c69b",
        superEarth: "#6fb23a",
        terrestrial: "#bdaa66",
        levaElevation1: "#292d39",
        levaElevation2: "#181c20",
        levaElevation3: "#373c4b",
        levaAccent1: "#0066dc",
        levaAccent2: "#007bff",
        levaAccent3: "#3c93ff",
        levaHighlight1: "#535760",
        levaHighlight2: "#8c92a4",
        levaHighlight3: "#fefefe",
        text: "rgba(254, 254, 254, 1)",
        "text-transparent": "rgba(254, 254, 254, 0.75)",
        "purple-bg": "rgba(91, 44, 203, 0.15)",
        "pink-border": "rgba(211, 60, 231, 0.30)",
        "blue-accent": "rgba(176, 225, 253, 1)",
        "blue-border": "rgba(176, 225, 253, 0.30)",
        "pink-accent": "rgba(232, 148, 251, 1)",
        oBlue: "#496EEF",
        oPurple: "#5B2CCB",
        oPink: "#D33CE7",
        oPinkLight: "#E894FB",
      },
      fontFamily: {
        primary: '"Krona One"',
        secondary: '"Space Grotesk"',
      },
      transitionProperty: {
        cubicCustom: "cubic-bezier(.01,.32,.99,.17)",
      },
    },
  },
  plugins: [],
};
