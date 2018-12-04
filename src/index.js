import React from "react";
import ReactDom from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";

ReactDom.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById("root")
)

if (module.hot) {
  // 开启热更新
  module.hot.accept();
}