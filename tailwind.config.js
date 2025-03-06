/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'marquee-vertical': {
          'from': { transform: 'translateY(0)' },
          'to': { transform: 'translateY(calc(-50% - var(--gap)/2))' }
        },
        spin: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' }
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 }
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: 0
          }
        }
      },
      animation: {
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
      }
    },
  },
  plugins: [],
  darkMode: ["class"],
}
