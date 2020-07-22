// This config is only used by docz
module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: ['../src/theme/res/_index.scss'],
      },
    },
  ],
};
