import * as path from 'path';
import * as webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const mode = process.argv[process.argv.indexOf('--mode') + 1];
const IOconfig = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    dir: path.resolve(__dirname, 'dist'),
    js: 'app.bundle.[chunkhash].js',
    css: 'styles.min.[chunkhash].css',
    assets: 'assets/',
  },
  htmlTemplate: path.resolve(__dirname, 'src/index.html'),
  themeRes: path.resolve(__dirname, 'src/theme/res/_index.scss'),
};

const config: webpack.Configuration = {
  entry: IOconfig.entry,
  stats: mode === 'production' ? 'normal' : 'minimal',
  devtool: 'source-map',
  target: 'web',
  output: {
    path: IOconfig.output.dir,
    filename: IOconfig.output.js,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.ts', '.tsx', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        use: ['ts-loader', 'eslint-loader'],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: IOconfig.themeRes,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: IOconfig.output.assets,
              name: '[name].[chunkhash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: IOconfig.htmlTemplate,
    }),
    new MiniCssExtractPlugin({
      filename: IOconfig.output.css,
    }),
    new StylelintPlugin(),
    new CleanWebpackPlugin(),
  ],
};

export default config;
