
const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.base.conf");

module.exports = {
  // 开发模式
  mode: "development",
  devtool: "inline-source-map",
  // 开发服务器配置
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    open: true
  }
};