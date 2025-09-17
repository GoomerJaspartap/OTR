/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'otr-orange': '#FF6B35',
        'otr-light-blue': '#4A90E2',
        'otr-dark-blue': '#1E3A8A',
        'otr-black': '#000000',
        'otr-white': '#FFFFFF',
        'otr-gray': '#374151',
        'otr-red': '#DC2626', // Keep for compatibility
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
