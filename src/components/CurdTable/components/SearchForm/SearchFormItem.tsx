import { Form, Input, Radio, Checkbox, Select } from "antd";
import { CurdTableColumn } from "../../types";
interface Props {
  column: CurdTableColumn;
}

const SearchFormItem: React.FC<Props> = (props: Props) => {
  if(props.column.formType === "file") {
    return null;
  } else {
    let formItemChildren: React.ReactNode = null;

    if(props.column.formType === undefined || props.column.formType === "text" || props.column.formType === "textarea") {
      formItemChildren = <Input />;
    } else if(props.column.formType === "radio") {
      formItemChildren = <Radio.Group><Radio value={1}>A</Radio></Radio.Group>;
    } else if(props.column.formType === "checkbox") {
      formItemChildren = <Checkbox.Group><Checkbox value={1}>A</Checkbox><Checkbox value={2}>B</Checkbox></Checkbox.Group>
    } else if(props.column.formType === "select") {
      formItemChildren = (
        <Select
          mode={props.column.mode}
          style={{width: "179px"}}
          placeholder={props.column.placeholder || "请选择"}
          options={props.column.dataSources}
        />
      )
    }
    return (
      <Form.Item label={props.column.title} name={props.column.dataIndex}>
        {formItemChildren}
      </Form.Item>
    )
  }
}

export default SearchFormItem;