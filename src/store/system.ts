import { create } from "zustand";
import routes from "@/router/routes";
import { RouteMeta, RouteObject } from "react-router-dom";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];
type State = {
  isCollapsed: boolean
  menus: MenuItem[]
  menuMap: MenuMap
}
type Actions = {
  updateSideBarExpand: (isExpand: boolean) => void
  resetMenus(): void
}
interface MenuMap {
  [key: string]: MenuItem
}

// 获取常规路由路径
function getNormalRoutePath(routePath: string): string {
  if(routePath.startsWith("/")) {
    routePath = routePath.substring(1);
  }
  if(routePath.endsWith("/")) {
    routePath = routePath.substring(0, routePath.length - 1);
  }
  return routePath;
}
// 获取可用路由
function getAvailableRoute(route: RouteObject): RouteObject {
  if(route.children && route.children.length === 1) {
    const path = `${getNormalRoutePath(route.path as string)}/${getNormalRoutePath(route.children[0].path as string)}`;
    route = route.children[0];
    return getAvailableRoute({
      path,
      children: route.children,
      meta: route.meta
    });
  } else {
    return route;
  }

}
// routes转菜单
function generateMenus(routes: RouteObject[], parentPath: string = ""): MenuItem[] {
  routes = routes.map(route => ({
    path:  `${parentPath === "" ? parentPath : (parentPath + "/")}${route.path}`,
    children: route.children,
    meta: route.meta
  }));
  const menus: MenuItem[] = [];
  routes.forEach(route => {
    const availableRoute = getAvailableRoute(route);
    const meta: RouteMeta = availableRoute.meta || {};
    if(meta.hide !== true) {
      const menuItem: MenuItem = {
        label: meta.title,
        key: availableRoute.path as string,
        icon: meta.icon
      }
      menus.push(menuItem);
      if(availableRoute.children !== undefined) {
        (menuItem as any).children = generateMenus(availableRoute.children, availableRoute.path);
      }
    }
  });
  return menus;
}
// 获取菜单映射
function generateMenuMap(menus: MenuItem[], menuMap: MenuMap): MenuMap {
  menus.forEach((menu) => {
    const children = (menu as any).children;
    menuMap[(menu as any).key] = menu;
    if(children && children.length > 0) {
      generateMenuMap(children, menuMap);
    }
  });
  return menuMap;
}

// 系统状态
const useSystemStore = create<State & Actions>(setState => {
  return ({
    isCollapsed: false,
    menus: [],
    menuMap: {},
    updateSideBarExpand(isCollapsed: boolean) {
      setState({ isCollapsed });
    },
    resetMenus() {
      const menus = generateMenus(routes);
      setState({ menus, menuMap: generateMenuMap(menus, {}) });
    }
  })
});

export default useSystemStore;