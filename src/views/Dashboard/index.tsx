import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Space, Table,message } from "antd";
import style from "./index.module.scss";
import BasicCard from "@/components/BasicCard";
import CurdTable from "@/components/CurdTable";
import { CurdTableColumn } from "@/components/CurdTable/types";

const tableColumns: CurdTableColumn[] = [
  {
    search: true,
    title: "姓名",
    dataIndex: "name"
  },
  {
    title: "性别",
    dataIndex: "gender"
  },
  {
    title: "年龄",
    dataIndex: "age"
  }
]

const DashboardView: React.FC = () => {
  const data = [
    { key: "0", name: "小明", gender: "男", age: 18 },
    { key: "1", name: "小红", gender: "女", age: 18 },
    { key: "2", name: "小美", gender: "女", age: 18 },
  ]
  const pagination = {
    current: 1,
    pageSize: 10,
    total: 200
  }
  const [messageApi, contextHolder] = message.useMessage();
  const handleClick = () => {
    messageApi.success("Antd引入成功...");
  }
  return (
    <BasicCard>
      {contextHolder}
      <h1 className={style.title}>首页</h1>
      <div className={style.ability}>
        <Space>
          <Button icon={<PlusOutlined />} type="primary" onClick={handleClick}>新增</Button>
          <Button icon={<DeleteOutlined />} type="primary" danger onClick={handleClick}>删除</Button>
        </Space>
      </div>
      <CurdTable columns={tableColumns} data={data} pagination={pagination} />
    </BasicCard>
  )
}

export default DashboardView;