import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      fontFamily: {
        'poor-story': 'var(--poor-story-font)',
      },
      colors: {
        primary: '#FA940D',
        secondary: '#EE9EB6',
      },
    },
  },
  plugins: [require('tailwindcss-multi')],
};
export default config;
