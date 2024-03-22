const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        nunito: 'Nunito-Regular',
        nunitoMedium: 'Nunito-Medium',
        nunitoSemiBold: 'Nunito-SemiBold',
        nunitoBold: 'Nunito-Bold',
        nunitoExtraBold: 'Nunito-ExtraBold',
      },
      colors: {},
    },
  },
  variants: {},
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        // eslint-disable-next-line quotes
        '.app-screen': `flex-1 pt-3`,
      });
    }),
  ],
};
