module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "theme": {
    "extend": {
      "colors": {
        "primary": "#5B5BD6",
        "primary-hover": "#5151CD",
        "primary-active": "#5753C6",
        "primary-disabled": "#9B9EF0",
        "secondary-hover": "#9B9EF0",
        "tertiary-hover-bg": "#CBCDFF",
        "tertiary-active-bg": "#B8BAF8",
        "whitesmoke": "#f9f9fb",
        "black": "#000",
        "gray": "#1e1e1e",
        "darkgray": "#afafaf",
        "lightsteelblue": "#cbcdff",
      },
      fontFamily: {
        pelak: ["var(--font-pelak)"],        
      },
      borderRadius: {
        "num-999": "999px",
      },
      padding: {
        "num-16": "16px",
      },
    },
    fontSize: {
      "num-14": "14px",
      "num-16": "16px",
    },
    lineHeight: {
      "num-20": "20px",
      "num-22": "22px",
    },
    letterSpacing: {
      "num--0_16": "-0.16px",
      "num--0_18": "-0.18px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
