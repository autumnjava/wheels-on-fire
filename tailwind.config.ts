import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      dark: '#333333',
      transparent: 'transparent',
      red: '#D40E1D',
      lightOliveGreen: '#d5caa5',
      gray: {
        200: '#e5e7eb',
        700: '#374151',
        DEFAULT: '#bebebe',
      },
    },
    fontFamily: {
      futura: 'Futura, sans-serif',
      futuraBold: 'Futura-Bold, sans-serif',
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
        footer: '20% 1fr 20% 20%',
      },
      fontSize: {
        navMenu: ['var(--navMenu)', { lineHeight: '120%' }],
        heroHeading: ['var(--heroHeading)', { lineHeight: '120%' }],
        headingAboutUs: ['var(--headingAboutUs)', { lineHeight: '100%' }],
        headingWhatWeOffer: [
          'var(--headingWhatWeOffer)',
          { lineHeight: '120%' },
        ],
        headingWhatWeOfferSub: [
          'var(--headingWhatWeOfferSub)',
          { lineHeight: '100%' },
        ],
        heroHeadingXL: ['var(--heroHeadingXL)', { lineHeight: '120%' }],
        headingXXXL2: ['var(--headingXXXL2)', { lineHeight: '100%' }],
        headingXXXL: ['var(--headingXXXL)', { lineHeight: '100%' }],
        headingXXL: ['var(--headingXXL)', { lineHeight: '100%' }],
        headingXL: ['var(--headingXL)', { lineHeight: '100%' }],
        headingL: ['var(--headingL)', { lineHeight: '110%' }],
        headingM: ['var(--headingM)', { lineHeight: '140%' }],
        headingS: ['var(--headingS)', { lineHeight: '120%' }],
      },
      borderWidth: {
        DEFAULT: '0.3px',
      },
      screens: {
        'wider': '900px',
        
      },
    },
  },
  plugins: [],
};
export default config;
