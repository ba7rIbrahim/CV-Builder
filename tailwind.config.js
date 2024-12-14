import Paragraph from "antd/es/skeleton/Paragraph";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        background: "#f8f9fa",
        main: "#1890ff",
        border: "#d9d9d9",
        paragraphColor: "#000000D9",
      },
    },
  },
  plugins: [],
};