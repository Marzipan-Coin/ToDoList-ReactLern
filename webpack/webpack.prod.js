// webpack.prod.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].[contenthash].js',
    clean: true, // cleans the output directory before emit (Webpack 5 feature)
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // enables code splitting for better caching
    },
  },
});
