module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-serif"],
      },
      letterSpacing: {
        normal: "-0.7px",
      },
    },
  },
  plugins: [],
};
