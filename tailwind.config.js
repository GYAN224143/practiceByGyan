/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4C70F0",
        textDark: "rgba(255, 255, 255, 0.6)",
        bgBlue: "#23283B",
        lightBlue: "#2a2f41",
      },
    },
    container: {
      padding: "4rem",
    },
  },
  plugins: [],
};
