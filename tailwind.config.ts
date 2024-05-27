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
      gray: {
        200: '#e5e7eb',
        700: '#374151',
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
        footer: '25% auto 25%',
      },
      fontSize: {
        navMenu: ['var(--navMenu)', { lineHeight: '120%' }],
        heroHeading: ['var(--heroHeading)', { lineHeight: '120%' }],
        headingXXXL: ['var(--headingXXXL)', { lineHeight: '120%' }],
        headingXXL: ['var(--headingXXL)', { lineHeight: '120%' }],
        headingXL: ['var(--headingXL)', { lineHeight: '130%' }],
        headingL: ['var(--headingL)', { lineHeight: '133%' }],
        headingM: ['var(--headingM)', { lineHeight: '140%' }],
        headingS: ['var(--headingS)', { lineHeight: '120%' }],
      },
    },
  },
  plugins: [],
};
export default config;
