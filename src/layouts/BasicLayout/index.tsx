import { Outlet, Navigate, useLocation } from "react-router-dom";

// 基础布局组件
const BasicLayout: React.FC = () => {
  const location = useLocation();
  if(location.pathname === "/") {
    return (
      <Navigate to="/dashboard" replace></Navigate>
    )
  } else {
    return (
      <div className="basic-layout">
        <Outlet />
      </div>
    )
  }
}

export default BasicLayout;