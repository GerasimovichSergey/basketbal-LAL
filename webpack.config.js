const { resolve } = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (argv, env) => {
  const isProd = env.mode === 'production';

  return {
    target: 'web',
    mode: 'development',
    devtool: 'source-map',
    entry: {
      main: './src/index',
    },
    output: {
      path: resolve(__dirname, './dist'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|svg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash][ext]'
          },
        },
        {
          test: /\.ts$/,
          use: 'ts-loader',
        },
        {
          test: /\.s?css$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ]
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      }),
    ],
  };
}