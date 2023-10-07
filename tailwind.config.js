/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b91c1c",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      borderRadius: {
        default: "8px",
      },
    },
  },
  plugins: [],
};
