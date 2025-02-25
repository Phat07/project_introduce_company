/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(calc(-50% - var(--gap)/2))' }
        },
        'marquee-vertical': {
          'from': { transform: 'translateY(0)' },
          'to': { transform: 'translateY(calc(-50% - var(--gap)/2))' }
        }
      },
      animation: {
        'marquee': 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
      }
    },
  },
  plugins: [],
  darkMode: ["class"],
}
