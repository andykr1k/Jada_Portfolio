module.exports = {
  content:["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#605C4E ",
        "secondary": "#C7C7A6",
        "accent": "#EAFFDA",
        "neutral": "#605C4E",
        "base-100": "#605C4E",
        "info": "#605C4E",
        "success": "#605C4E",
        "warning": "#605C4E",
        "error": "#605C4E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}