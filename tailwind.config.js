/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a', 950: '#020617'
        },
        amber: {
          100: '#fffbeb', 200: '#fef3c7', 300: '#fde68a', 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309'
        },
        yellow: {
          200: '#fef08a'
        },
        red: {
          300: '#fca5a5', 400: '#f87171', 500: '#ef4444'
        },
        emerald: {
          300: '#6ee7b7', 400: '#34d399', 500: '#10b981'
        }
      }
    },
  },
  plugins: [],
}