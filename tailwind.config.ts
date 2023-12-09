import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2a0845',
        light: '#632cba',
        dark: '#14052c',
        smoke: '#f8f4fd',
        smoker: '#e3d6f8',
      },
    },
  },
  plugins: [],
}

export default config