import { useEffect } from "react";
import style from "./index.module.scss";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import useSystemStore from "@/store/system";
let timerID: NodeJS.Timer;
const Header: React.FC = () => {

  const isCollapsed = useSystemStore(state => state.isCollapsed);
  const updateSideBarExpand = useSystemStore(state => state.updateSideBarExpand);
  const handleClick = () => {
    updateSideBarExpand(!isCollapsed);
  }

  // useEffect(() => {
  //   timerID = setInterval(() => {
  //     console.log("执行计时器");
  //     handleClick();
  //   }, 3000);
  //   return () => {
  //     console.log("卸载计时器");
  //     clearInterval(timerID);
  //   }
  // });

  return (
    <header className={style.header}>
      <div className={style.left} onClick={handleClick}>
        { isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
      </div>
      <div className={style.right}>
        <img className={style.avatar} src="https://img0.baidu.com/it/u=2566646385,2213824192&fm=253&fmt=auto&app=138&f=JPEG?w=893&h=500" />
      </div>
    </header>
  )
}

export default Header;