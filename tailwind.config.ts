import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      colors: {
        paper: '#f7f7f5',
        ink: '#141512',
        gold: '#aa791d',
        'gold-dark': '#7d5714',
      },
    },
  },
  plugins: [],
};

export default config;
