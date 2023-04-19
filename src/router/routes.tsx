import type { RouteObject } from "react-router-dom";
import LoginPage from "@/pages/Login";
import Error404Page from "@/pages/Error/404";
import BasicLayout from "@/layouts/BasicLayout";
import DashboardView from "@/views/Dashboard";
import SystemView from "@/views/System";

const routes: Array<RouteObject> = [
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardView />
      },
      {
        path: "system",
        element: <SystemView />
      }
    ]
  },
  {
    path: "*",
    element: <Error404Page />
  }
];

export default routes;