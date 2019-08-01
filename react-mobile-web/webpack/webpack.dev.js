module.exports = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [{
          loader: 'style-loader',
          options: {
            sourceMap: true
          },
        }, {
          loader: 'css-loader',
          options: {
            import: true,
            modules: true,
            sourceMap: true,
            importLoaders: 1
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }],
      }
    ]
  }
};