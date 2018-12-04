const path = require("path");

module.exports = {
  entry: "../src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "/dist")
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
    new webpack.HotModuleReplacementPlugin()
  ]
};