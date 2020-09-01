/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import merge from 'webpack-merge';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import base from './webpack.base';

const smp = new SpeedMeasurePlugin();

const config: webpack.Configuration = smp.wrap(
  merge(base, {
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
            output: {
              comments: false,
            },
          },
          extractComments: false,
        }),
        new OptimizeCSSAssetsPlugin({}),
        new webpack.DefinePlugin({
          API_BASE: JSON.stringify('prod'),
        }),
        // new BundleAnalyzerPlugin(),
      ],
    },
  })
);

export default config;
