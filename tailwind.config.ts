import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      wide: '0.25em',
    },
    extend: {
      colors: {
        gray: {
          '50': '#f8f8f9',
          '100': '#f3f7f8',
          // Define other shades of blue as needed
          '200': '#f2f2f3',
        },
      },
    },
  },
  plugins: [
    // Add our custom plugin for the hover effect
    plugin(function({ addUtilities, theme, addComponents }: any) {
      const newUtilities = {
        '.hover-fade-effect::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '0%',
          height: '100%',
          backgroundImage: `linear-gradient(to right, transparent, ${theme('colors.gray.300')} 100%)`,
          opacity: '0',
          transition: 'width 0.7s ease-in-out, opacity 0.7s ease-in-out', // Adjusted for smoother transition
          zIndex: '-1',
        },
        '.hover-fade-effect:hover::before': {
          width: '100%',
          opacity: '1',
        },
        '.hover-fade-effect': {
          position: 'relative',
          overflow: 'hidden',
          transition: 'color 0.7s ease-in-out', // Smooth transition for text color
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
export default config;
