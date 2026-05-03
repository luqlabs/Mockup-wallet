/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        bgApp: "rgb(var(--color-bg-app) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        textMain: "rgb(var(--color-text) / <alpha-value>)",
      }
    },
  },
  plugins: [],
}
