document.querySelector("#root").innerHTML = "webpack使用";

if (module.hot) {
  // 开启热更新
  module.hot.accept();
}