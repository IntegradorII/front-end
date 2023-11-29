import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'white-md': '0 4px 6px -1px rgb(255 255 255 / 0.5), 0 2px 4px -2px rgb(255 255 255 / 0.5)',
      },
      colors: {
        'light-gray': '#ededed',
        'medium-gray': '#444646',
        'dark-gray': '#1d1d1e',
        'separator-gray': '#d9d9d9',
        'yellow': '#ffdb00',
        'light-yellow': '#ffeb36',
        'secondary-text': '#444647',
        'light-text': '#a1a2a2'
      }
    },
  },
  plugins: [],
}
export default config
