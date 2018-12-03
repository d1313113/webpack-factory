const webpack = require("webpack");
const config = require("./webpack.prod.conf");

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    // 在这里处理错误
    console.error(err);
    return;
  }
  // 处理完成
  console.log(stats.toString({
    chunks: false, // 构建过程中静默无输出
    colors: true //在控制台展示颜色
  }))
});