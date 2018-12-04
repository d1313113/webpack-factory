const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "../src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "/dist")
  },
  module: {
    relues: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    contentBase: "../dist", //本地服务器所加载页面的目录
    historyApiFallback: true, //不跳转
    inline: true, // 实时更新
    port: 3333, // 端口
    open: true, //自动打开浏览器
    hot: true
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