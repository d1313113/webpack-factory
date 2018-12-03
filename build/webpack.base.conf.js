const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 项目入口文件
  entry: {
    bundle: path.resolve(__dirname, "../src/index.js")
  },
  // 项目打包输出目录
  output: {
    path: path.resolve(__dirname, "../dist"),
    // 输出文件名称,携带hash值
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    })
  ]
};