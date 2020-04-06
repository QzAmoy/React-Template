import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import base from './webpack.base';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const config: webpack.Configuration = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../build'),
    compress: true,
    host: '0.0.0.0',
    port: 9000,
    hot: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
  ],
});

export default config;
