const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'none',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
    },
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      { test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(js)$/, use: 'babel-loader'},
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: 'false',
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/img", to: "img/[name][ext]" },
      ],
    }),
  ],
};