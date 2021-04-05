const path = require('path');

module.exports = {
  stories: ['../src/**/*.@(stories|story).@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
              localIdentName: '[local]__[hash:base64:5]',
            },
          },
        },
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: path.resolve(__dirname, '../src/theme/res/_index.scss'),
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};
