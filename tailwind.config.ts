import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      dark: '#333333',
      transparent: 'transparent',
      red: '#E52629',
      gray: {
        200: '#e5e7eb',
        700: '#374151',
      },
    },
    fontFamily: {
      futura: 'Futura, sans-serif',
      futuraExtraBold: 'Futura-CondensedExtraBold, Futura, sans-serif',
      futuraMedium: 'Futura-CondensedMedium, Futura, sans-serif',
      andale: 'Andale, sans-serif',
      minionpro: 'MinionPro, sans-serif',
    },
    fontWeight: {
      bold: '700',
      medium: '500',
      normal: '400',
      light: '300',
    },

    extend: {
      gridTemplateColumns: {
        footer: '25% auto 25%',
      },
      fontSize: {
        navMenu: ['var(--navMenu)', { lineHeight: '120%' }],
        heroHeading: ['var(--heroHeading)', { lineHeight: '120%' }],
        headerXXXL: ['var(--headerXXXL)', { lineHeight: '120%' }],
        headerXXL: ['var(--headerXXL)', { lineHeight: '120%' }],
        headerXL: ['var(--headerXL)', { lineHeight: '130%' }],
        headerL: ['var(--headerL)', { lineHeight: '133%' }],
        headerM: ['var(--headerM)', { lineHeight: '140%' }],
        headerS: ['var(--headerS)', { lineHeight: '120%' }],
      },
    },
  },
  plugins: [],
}
export default config
