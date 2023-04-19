import { Outlet } from "react-router-dom";

const BasicLayout: React.FC = () => {
  return (
    <div className="basic-layout">
      <Outlet />
    </div>
  )
}

export default BasicLayout;