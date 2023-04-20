import { useEffect } from "react";
import routes from "./routes";
import { HashRouter, useRoutes } from "react-router-dom";
import useSystemStore from "@/store/system";

const Router: React.FC = () => {
  const resetMenus = useSystemStore(state => state.resetMenus);
  const Routes = () => useRoutes(routes);
  useEffect(() => {
    resetMenus();
  }, []);
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  )
}

export default Router;