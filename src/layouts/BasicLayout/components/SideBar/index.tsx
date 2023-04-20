import { useNavigate, useLocation } from "react-router-dom";
import style from "./index.module.scss";
import { Menu } from "antd";
import useSystemStore from "@/store/system";

const SideBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isCollapsed = useSystemStore(state => state.isCollapsed);
  const menus = useSystemStore(state => state.menus);
  const defaultOpenKeys = "/" + location.pathname.split("/")[1];
  const onClickToPage = ({key: pagePath}: {key: string}) => {
    navigate(pagePath);
  };
  return (
    <aside className={style.aside} style={{width: `${isCollapsed ? 80 : 220}px`}}>
      <Menu
        theme="dark"
        inlineCollapsed={isCollapsed}
        onClick={onClickToPage}
        style={{ height: "100%" }}
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={[defaultOpenKeys]}
        mode="inline"
        items={menus}
      />
    </aside>
  )
}

export default SideBar;