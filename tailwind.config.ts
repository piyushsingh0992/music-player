import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

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
  },
  plugins: [],
};
export default config;
