const merge = require("webpack-merge");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const baseConfig = require("./webpack.base.conf");

module.exports = {
  // 生产模式
  mode: "production",
  devtool: "source-map",
  module: {
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin(["dist/"], {
      root: path.resolve(__dirname, "../"),
      verbose: true,
      dry: false
    })
  ]
};