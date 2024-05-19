import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // fontFamily: {
      //   andale: 'Andale',
      // },
      gridTemplateColumns: {
        footer: '25% auto 25%',
      },
    },
  },
  plugins: [],
}
export default config
