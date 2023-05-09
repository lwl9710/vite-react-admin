import { Form, Input, Radio, Checkbox, Select, DatePicker } from "antd";
import { CurdTableColumn } from "../../types";
import FormItemUpload from "./FormItemUpload";
interface Props {
  column: CurdTableColumn;
}

const FormItem: React.FC<Props> = (props: Props) => {
  let formItemChildren: React.ReactNode = null;
  if(props.column.formType === "picture") {
    formItemChildren = <FormItemUpload column={props.column}></FormItemUpload>;
    return (
      <Form.Item label={props.column.title} name={props.column.dataIndex}>
        {formItemChildren}
      </Form.Item>
    )
  } else {
    if(props.column.formType === undefined || props.column.formType === "text" || props.column.formType === "textarea") {
      formItemChildren = <Input placeholder={props.column.placeholder as string} />;
    } else if(props.column.formType === "radio") {
      formItemChildren = (<Radio.Group>
        {props.column.dataSource && props.column.dataSource.map((option, index) => (<Radio key={index} value={option.value}>{option.label}</Radio>))}
      </Radio.Group>);
    } else if(props.column.formType === "checkbox") {
      formItemChildren = (<Checkbox.Group>
        {props.column.dataSource && props.column.dataSource.map((option, index) => (<Checkbox key={index} value={option.value}>{option.label}</Checkbox>))}
      </Checkbox.Group>)
    } else if(props.column.formType === "select") {
      formItemChildren = (
        <Select
          mode={props.column.mode}
          style={{width: "179px"}}
          placeholder={props.column.placeholder || "请选择"}
          options={props.column.dataSource}
        />
      )
    } else if(props.column.formType === "datetime" || props.column.formType === "date") {
      formItemChildren = (
        <DatePicker showTime={props.column.formType === "datetime"} placeholder={props.column.placeholder as string} />
      )
    } else if(props.column.formType === "dateRange" || props.column.formType === "datetimeRange") {
      formItemChildren = (
        <DatePicker.RangePicker showTime={props.column.formType === "datetimeRange"} placeholder={props.column.placeholder as [string, string]} />
      )
    }
    return (
      <Form.Item label={props.column.title} name={props.column.dataIndex}>
        {formItemChildren}
      </Form.Item>
    )
  }
}

export default FormItem;