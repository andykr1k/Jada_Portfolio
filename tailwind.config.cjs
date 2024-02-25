module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#AC7B7D",
          secondary: "#C7C7A6",
          accent: "#EAFFDA",
          neutral: "#AC7B7D",
          "base-100": "#AC7B7D",
          info: "#AC7B7D",
          success: "#AC7B7D",
          warning: "#AC7B7D",
          error: "#AC7B7D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};