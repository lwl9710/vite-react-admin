import style from "./index.module.scss";

import {
  BarChartOutlined,
  SettingOutlined,
  UserOutlined,
  ApartmentOutlined,
  TeamOutlined,
  DashboardOutlined,
  FireOutlined,
  UnorderedListOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return { label, key, icon, children, type };
}

const items: MenuProps["items"] = [
  getItem("首页", "Dashboard", <DashboardOutlined />),
  getItem("系统管理", "system", <SettingOutlined />, [
    getItem("角色列表", "system-role", <UserOutlined />),
    getItem("权限列表", "system-permission", <ApartmentOutlined />),
    getItem("用户列表", "system-user", <TeamOutlined />)
  ]),
  getItem("活动管里", "activity", <FireOutlined />, [
    getItem("活动统计", "activity-count", <BarChartOutlined />),
    getItem("活动列表", "activity-list", <UnorderedListOutlined />),
  ]),
]

const SideBar: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return (
    <aside className={style.aside}>
      <Menu
        theme="dark"
        onClick={onClick}
        style={{ width: "100%", height: "100%" }}
        defaultSelectedKeys={["activity-count"]}
        defaultOpenKeys={["activity"]}
        mode="inline"
        items={items}
      />
    </aside>
  )
}

export default SideBar;