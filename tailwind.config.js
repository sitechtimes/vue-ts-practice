import daisyUi from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app.vue", "./pages/**/*.{vue,js,ts,jsx,tsx}", "./components/**/*.{vue,js,ts,jsx,tsx}", "./layouts/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [daisyUi],
  daisyui: { prefix: "du-", logs: false },
  darkMode: "selector",
  future: {
    hoverOnlyWhenSupported: true
  }
};
