import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      dark: '#333333',
      transparent: 'transparent',
      red: '#E52629',
      lightOliveGreen: '#d5caa5',
      gray: {
        200: '#e5e7eb',
        700: '#374151',
        DEFAULT: '#bebebe',
      },
    },
    fontFamily: {
      futura: 'Futura, sans-serif',
      futuraExtraBold: 'Futura-CondensedExtraBold, Futura, sans-serif',
      futuraMedium: 'Futura-CondensedMedium, Futura, sans-serif',
      andaleMono: 'AndaleMono, sans-serif',
      andaleMonoBold: 'AndaleMonoBold, sans-serif',
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
        footer: '1fr 39% 35% 1fr',
      },
      fontSize: {
        navMenu: ['var(--navMenu)', { lineHeight: '120%' }],
        heroHeading: ['var(--heroHeading)', { lineHeight: '120%' }],
        heroHeadingWhatWeOffer: ['var(--headingWhatWeOffer)', { lineHeight: '120%' }],
        heroHeadingXL: ['var(--heroHeadingXL)', { lineHeight: '120%' }],
        headingXXXL: ['var(--headingXXXL)', { lineHeight: '100%' }],
        headingXXL: ['var(--headingXXL)', { lineHeight: '100%' }],
        headingXL: ['var(--headingXL)', { lineHeight: '100%' }],
        headingL: ['var(--headingL)', { lineHeight: '110%' }],
        headingM: ['var(--headingM)', { lineHeight: '140%' }],
        headingS: ['var(--headingS)', { lineHeight: '120%' }],
      },
    },
  },
  plugins: [],
};
export default config;
