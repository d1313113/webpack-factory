const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const config = require("./webpack.base.config");

module.exports = merge(config, {
  devtool: "inline-source-map",
  mode: "development",
  module: {
    relues: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "../dist"),
    inline: true,
    open: true,
    compress: true,
    port: 3333,
    hot: true
  },
  pligins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});