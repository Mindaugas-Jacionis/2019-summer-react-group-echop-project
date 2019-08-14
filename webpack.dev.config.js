const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
  mode: 'development',
  devServer: {
    port: 9001,
    compress: true,
    publicPath: '/',
    historyApiFallback: true,
  },
});
