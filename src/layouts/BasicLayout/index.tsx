import { Suspense } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

import style from "./index.module.scss";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

// 基础布局组件
const BasicLayout: React.FC = () => {
  const location = useLocation();
  if(location.pathname === "/") {
    return (
      <Navigate to="/dashboard" replace />
    )
  } else {
    return (
      <div className={style["basic-layout"]}>
        <SideBar></SideBar>
        <main className={style.main}>
          <Header />
          <section className={style.view}>
            <Suspense fallback={<p>loading...</p>}>
              <Outlet />
            </Suspense>
          </section>
        </main>
      </div>
    )
  }
}

export default BasicLayout;