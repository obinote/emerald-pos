module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          components: './src/components',
          locales: './src/locales',
          models: './src/models',
          navigations: './src/navigations',
          reduxs: './src/reduxs',
          screens: './src/screens',
          services: './src/services',
          types: './src/types',
          utils: './src/utils',
        },
      },
    ],
  ],
};
