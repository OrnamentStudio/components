const { resolve } = require('path');
const nested = require('postcss-nested');


module.exports = {
  mode: 'development',

  devServer: {
    contentBase: resolve(__dirname, 'preview'),
    historyApiFallback: { index: 'index.html' },
    port: 3000,
    open: true,
  },

  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },

  context: resolve(__dirname, 'preview'),

  entry: './index.jsx',
  output: {
    publicPath: '/assets/',
    filename: 'app.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { plugins: [nested] },
          },
        ],
      },

      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
