import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/next-themes/dist/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        gradientStart: '#5097fa',
        gradientEnd: '#5363ff',
      },
      backgroundImage: {
        'gradient-to-r-primary': 'linear-gradient(to right, #5097fa, #5363ff)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
