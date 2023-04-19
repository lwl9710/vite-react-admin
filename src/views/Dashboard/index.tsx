import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Space, message } from "antd";
import style from "./index.module.scss";

import BasicCard from "@/components/BasicCard";

const DashboardView: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const handleClick = () => {
    messageApi.success("Antd引入成功...");
  }
  return (
    <BasicCard>
      {contextHolder}
      <h1 className={`${style.title}`}>首页</h1>
      <div className={style.ability}>
        <Space>
          <Button icon={<PlusOutlined />} type="primary" onClick={handleClick}>新增</Button>
          <Button icon={<DeleteOutlined />} type="primary" danger onClick={handleClick}>删除</Button>
        </Space>
      </div>
    </BasicCard>
  )
}

export default DashboardView;