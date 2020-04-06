import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import base from './webpack.prod';

const config: webpack.Configuration = merge(base, {
  mode: 'development',
});

export default config;