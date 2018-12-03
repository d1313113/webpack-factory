const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require("webpack");
const AutoDllPlugin = require("autodll-webpack-plugin");

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
  resolve: {
    // 别名
    alias: {
      "vue$": "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "../src")
    },
    // 省略后缀配置
    extensions: ["*", ".js", ".json", ".vue"]
  },
  module: {
    rules: [
      // babel插件
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      // 文件loader
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      // vue文件处理
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new AutoDllPlugin({
      inject: true,
      debug: true,
      filename: "[name]_[hash].js",
      path: "./dll",
      entry: {
        vendor: ["vue", "vue-router", "vuex"]
      }
    }),
    new webpack.optimize.SplitChunksPlugin()
  ]
};