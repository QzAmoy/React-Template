import webpack from 'webpack';
import merge from 'webpack-merge';
import base from './webpack.prod';

const config: webpack.Configuration = merge(base, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      API_BASE: JSON.stringify('test'),
    }),
  ],
});

export default config;
