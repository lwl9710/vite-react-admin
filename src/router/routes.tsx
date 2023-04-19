import type { RouteObject } from "react-router-dom";
import LoginPage from "@/pages/Login";
import Error404Page from "@/pages/Error/404";

const routes: Array<RouteObject> = [
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "*",
    element: <Error404Page />
  }
];


export default routes;