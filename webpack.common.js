const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.(png||jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant page',
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};