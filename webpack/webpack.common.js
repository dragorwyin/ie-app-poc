const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const paths = require('./paths');

module.exports = {
  entry: paths.entryPath,
  output: {
    filename: 'bundle.js',
    path: paths.outputPath,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  esmodules: true,
                },
                useBuiltIns: 'usage',
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/transform-react-constant-elements',
            '@babel/transform-react-inline-elements',
            'transform-react-remove-prop-types',
            'transform-react-pure-class-to-function',
            '@babel/plugin-transform-runtime',
            'react-hot-loader/babel',

            ['@babel/plugin-proposal-class-properties', { loose: true }],
          ],
        },
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: paths.outputPath,
    hot: true,
    port: 8080,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: paths.templatePath,
    }),
  ],
  watch: true,
  watchOptions: {
    aggregateTimeout: 500,
    ignored: /node_modules/,
    poll: 3000
  }
};