module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@Navigation': './src/navigation',
            '@Components': './src/components',
            '@Screens': './src/screens',
            '@Stores': './src/stores',
            '@Utils': './src/utils',
            '@Queries': './src/queries',
            '@Assets': './assets',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  };
};
