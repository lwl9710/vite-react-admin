import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";
import BasicLayout from "@/layouts/BasicLayout";
import {
  SettingOutlined,
  UserOutlined,
  ApartmentOutlined,
  TeamOutlined,
  DashboardOutlined
} from "@ant-design/icons";

function getLazyComponent(component: Promise<any>, attributies: StringObject = {}): React.ReactNode {
  const LazyComponentWrapper = lazy(() => component);
  return <LazyComponentWrapper {...attributies}></LazyComponentWrapper>;
}

const routes: Array<RouteObject> = [
  {
    path: "/login",
    element: getLazyComponent(import("@/pages/Login")),
    meta: { title: "登录", hide: true }
  },
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "dashboard",
        element: getLazyComponent(import("@/views/Dashboard")),
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
        element: getLazyComponent(import("@/views/system/UserList")),
        meta: { title: "用户列表", icon: <TeamOutlined /> }
      },
      {
        path: "roleList",
        element: getLazyComponent(import("@/views/system/RoleList")),
        meta: { title: "角色列表", icon: <UserOutlined /> }
      },
      {
        path: "permissionList",
        element: getLazyComponent(import("@/views/system/PermissionList")),
        meta: { title: "权限列表", icon: <ApartmentOutlined /> }
      },
    ]
  },
  {
    path: "*",
    element: getLazyComponent(import("@/pages/Error/404")),
    meta: { title: "访问错误", hide: true }
  }
];

export default routes;