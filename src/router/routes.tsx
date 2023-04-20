import { RouteObject } from "react-router-dom";
import LoginPage from "@/pages/Login";
import Error404Page from "@/pages/Error/404";
import BasicLayout from "@/layouts/BasicLayout";
import DashboardView from "@/views/Dashboard";
import UserList from "@/views/system/UserList";
import RoleList from "@/views/system/RoleList";
import PermissionList from "@/views/system/PermissionList";
import {
  SettingOutlined,
  UserOutlined,
  ApartmentOutlined,
  TeamOutlined,
  DashboardOutlined
} from "@ant-design/icons";

const routes: Array<RouteObject> = [
  {
    path: "/login",
    element: <LoginPage />,
    meta: { title: "登录", hide: true}
  },
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardView />,
        meta: { title: "数据大屏", icon: <DashboardOutlined />, fullPath: "/dashboard" }
      },
    ]
  },
  {
    path: "/system",
    element: <BasicLayout />,
    meta: { title: "系统管理", icon: <SettingOutlined /> },
    children: [
      {
        path: "userList",
        element: <UserList />,
        meta: { title: "用户列表", icon: <TeamOutlined /> }
      },
      {
        path: "roleList",
        element: <RoleList />,
        meta: { title: "角色列表", icon: <UserOutlined /> }
      },
      {
        path: "permissionList",
        element: <PermissionList />,
        meta: { title: "权限列表", icon: <ApartmentOutlined /> }
      },
    ]
  },
  {
    path: "*",
    element: <Error404Page />,
    meta: { title: "访问错误", hide: true }
  }
];

export default routes;