import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import base from './webpack.base';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config: webpack.Configuration = merge(base, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: true,
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
});

export default config;
