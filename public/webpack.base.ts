/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';

const config: webpack.Configuration = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    main: path.resolve(__dirname, '../src'),
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Disable require.ensure as it's not a standard language feature.
      { parser: { requireEnsure: false } },
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              cache: true,
              eslintPath: require.resolve('eslint'),
              resolvePluginsRelativeTo: path.resolve(__dirname, '../'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
        resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        include: path.resolve(__dirname, '../src'),
      },
      // LESS & CSS
      {
        test: /\.css|\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              noIeCompat: true,
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: [/\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              hash: 'sha512',
              limit: 10000,
              publicPath: '/',
              name: 'assets/img/[name].[contenthash:8].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: [/\.eot$/, /\.ttf$/, /\.woff$/, /\.woff2$/],
        loader: 'url-loader',
        options: {
          hash: 'sha512',
          limit: 50,
          publicPath: '/',
          name: 'assets/font/[name].[contenthash:8].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@css': path.resolve(__dirname, '../src/assets/css'),
      '@img': path.resolve(__dirname, '../src/assets/img'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      favicon: path.resolve(__dirname, './favicon.ico'),
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].bundle.css',
      chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
    }),
    new ManifestPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000, // 形成一个新代码块最小的体积
      maxAsyncRequests: 5, // 按需加载时候最大的并行请求数
      maxInitialRequests: 3, // 最大初始化请求数
      automaticNameDelimiter: '~', // 打包分割符
      name: true,
      cacheGroups: {
        default: {
          name: 'base',
          chunks: 'initial',
        },
        icon: {
          name: 'icon',
          test: /[\\/]node_modules[\\/]@ant-design[\\/]icons/,
        },
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        common: {
          name: 'common',
          chunks: 'all',
          minChunks: 2,
          priority: -30,
        },
        'async-commons': {
          // 异步加载公共包、组件等
          chunks: 'async',
          minChunks: 2,
          name: 'async-commons',
          priority: -20,
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
};

export default config;
