import { Button, message } from "antd";
import style from "./index.module.scss";

const DashboardView: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const handleClick = () => {
    messageApi.success("Antd引入成功...");
  }
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={handleClick}>ClickMe</Button>
      <h1 className={`${style.test} ${style.color}`}>Welcome to Dashboard.</h1>
    </>
    
  )
}

export default DashboardView;