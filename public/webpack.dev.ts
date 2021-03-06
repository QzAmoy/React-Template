/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import base from './webpack.base';

const config: webpack.Configuration = merge(base, {
  mode: 'development',
  output: {
    filename: 'assets/js/[name]/[hash:8].bundle.js',
    chunkFilename: 'assets/js/[name]/[hash:8].chunk.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../build'),
    compress: true,
    host: '0.0.0.0',
    port: 9000,
    hot: true,
    inline: true,
    hotOnly: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      API_BASE: JSON.stringify('https://dev'),
    }),
  ],
});

export default config;
