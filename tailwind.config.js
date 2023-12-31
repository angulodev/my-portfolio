/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#0077C2',
        'primary-200': '#59a5f5',
        'primary-300': '#c8ffff',
        'accent-100': '#00BFFF',
        'accent-200': '#00619a',
        'text-100': '#333333',
        'text-200': '#5c5c5c',
        'bg-100': '#FFFFFF',
        'bg-200': '#f5f5f5',
        'bg-300': '#cccccc',
      },
    },
  },
  plugins: [],
}

