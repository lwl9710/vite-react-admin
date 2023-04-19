import ReactDOM from "react-dom/client";

import Router from "@/router";
import ConfigProvider from "antd/es/config-provider";
import zhCN from "antd/locale/zh_CN";
import "@/assets/styles/global.scss";
import "@/assets/styles/initialize.scss";

const rootElement: HTMLElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <ConfigProvider locale={zhCN}>
    <Router></Router>
  </ConfigProvider>
);