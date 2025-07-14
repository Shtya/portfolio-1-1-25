/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // أو 'media' إذا كنت تريد بناءً على تفضيلات النظام

  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#28d07e',
      },
      animation: {
        spin: 'spin 1s linear infinite',
        'spin-inner': 'spinInner 1s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spinInner: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-720deg)' },
        },
      },
    },
  },
  plugins: [],
};
