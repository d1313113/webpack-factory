const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "react-hot-loader/patch", "../src/index.js"],
  output: {
    filename: "bundle.[hash:8].js",
    path: path.resolve(__dirname, "/dist")
  },
  module: {
    relues: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ["url-loader"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "../dist/index.html",
      hash: true // 会在打包好的bundle.js后面加上hash
    }),
    new CleanWebpackPlugin("../dist")
  ]
};