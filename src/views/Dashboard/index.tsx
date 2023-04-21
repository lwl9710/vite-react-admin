import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Space, Table,message } from "antd";
import style from "./index.module.scss";
import BasicCard from "@/components/BasicCard";
import CurdTable from "@/components/CurdTable";
import { CurdTableColumn } from "@/components/CurdTable/types";

const tableColumns: CurdTableColumn[] = [
  {
    
    title: "姓名",
    dataIndex: "name",
    search: true
  },
  {
    title: "年龄",
    dataIndex: "age",
    search: true,
    formType: "radio"
  },
  {
    title: "性别",
    dataIndex: "gender",
    search: true,
    formType: "checkbox"
  },
  {
    title: "成绩",
    dataIndex: "score",
    search: true,
    formType: "select",
    dataSources: [
      { label: "选项-1", value: 1 },
      { label: "选项-2", value: 2 },
      { label: "选项-3", value: 3 }
    ],
    mode: "multiple"
  }
]

const DashboardView: React.FC = () => {
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
      <CurdTable columns={tableColumns}/>
    </BasicCard>
  )
}

export default DashboardView;