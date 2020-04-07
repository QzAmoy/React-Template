import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import base from './webpack.base';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const config: webpack.Configuration = merge(base, {
  mode: 'production',
  output: {
    filename: 'assets/js/[name]/[contenthash:8].bundle.js',
    chunkFilename: 'assets/js/[name]/[contenthash:8].chunk.js',
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.(js|mjs|jsx|ts|tsx)(\?.*)?$/i,
        cache: true,
        parallel: true,
        sourceMap: false,
        terserOptions: {
          warnings: false,
          compress: {
            drop_console: true,
          },
          output:{
            comments: false
          }
        },
        extractComments: false,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
});

export default config;
