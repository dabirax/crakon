/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
