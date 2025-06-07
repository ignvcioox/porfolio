import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        inputs: {
          '0%, 100%': { width: '0' },
          '10%, 90%': { width: '58px' },
          '30%, 70%': { width: '215px' },
        },
        cursor: {
          '50%': { borderRightColor: 'transparent' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        "inputs": "inputs 8s steps(22) infinite",
        "wave": "wave 55s infinite linear",
        "cursor": "cursor 0.5s step-end infinite alternate",
        "animate-pulse-subtle": "pulse - subtle 4s ease-in -out infinite",
        "animate-meteor": "meteor 5s linear infinite",
      },
      colors: {
        "light-mode-text": "#3f3f46",
        "dark-mode-text": "#e4e4e7",
        "light-mode-bg": "#f9fafb",
        "dark-mode-bg": "#18181b",
        "light-mode-secondary-bg": "#f3f4f6",
        "dark-mode-secondary-bg": "#27272a4d",
        "primary-button-bg": "#5a4fcf"
      }
    },
  },
  plugins: [tailwindScrollbar],
}
