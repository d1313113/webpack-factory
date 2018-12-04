const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const config = require("./webpack.base.config");

module.exports = merge(config, {
  mode: "production",
  plugins: [
    new UglifyJSPlugin()
  ]
});