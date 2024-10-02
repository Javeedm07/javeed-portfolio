// @type {import('tailwindcss').Config}
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ["JetBrains Mono", "monospace"], // add your primary font here
    },
    // extend: {
    //   colors: {
    //     primary: "#1b1b1b",
    //     accent: {
    //       DEFAULT: "#2196f3",
    //       hover: "#1a237e",
    //     },
    //   },

      // colors: {
      //   primary: "#0a0a0a",
      //   accent: {
      //     DEFAULT: "#dc143c",
      //     hover: "#c81d39",
      //   },
      // },

      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#ff6b35",
          hover: "#e65a2b",
        },
      },

      // colors: {
      //   primary: "#1c1c22",
      //   accent: {
      //     DEFAULT: "#00ff99",
      //     hover: "#00e187",
      //   },
      // },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
