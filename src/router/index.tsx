import routes from "./routes";
import { HashRouter, useRoutes } from "react-router-dom";

const Router: React.FC = () => {
  const Routes = () => useRoutes(routes);
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  )
}

export default Router;