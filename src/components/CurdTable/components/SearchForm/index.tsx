import { useEffect, useState } from "react";
import { SearchOutlined, SyncOutlined } from "@ant-design/icons";
import { Row, Col, Form, Input, Button, Space } from "antd";

import style from "./index.module.scss";
import SearchFormItem from "./SearchFormItem";
import type { CurdTableColumn } from "../../types";

interface Props {
  columns?: CurdTableColumn[]
}

const SearchForm: React.FC<Props> = (props: Props) => {
  const [ form ] = Form.useForm();
  const [searchColumns, setSearchColumns] = useState<CurdTableColumn[]>([])

  useEffect(() => {
    if(props.columns !== undefined) {
      const columns = props.columns.filter(column => column.search);
      console.log("组件开始加载...", columns);
      setSearchColumns(columns);
    }
  }, [props.columns]);

  const clickResetForm = () => {
    console.log("重置", form);
    form.resetFields();
  }

  const clickSearch = () => {
    console.log("搜索", form.getFieldsValue());
  }

  if(searchColumns.length > 0) {
    return (
      <div className={style["search-form"]}>
        <Form form={form} layout="inline">
          {searchColumns.map((column, index) =><SearchFormItem key={index} column={column} />)}
          <Form.Item>
            <Space>
              <Button icon={ <SyncOutlined /> } onClick={clickResetForm}>重置</Button>
              <Button icon={ <SearchOutlined /> } type="primary" onClick={clickSearch}>搜索</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    )
  } else {
    return null;
  }
}

export default SearchForm;