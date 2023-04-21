import type { ColumnType } from 'antd/es/table';
declare type FormType = "text" | "file" | "textarea" | "radio" | "checkbox" | "select";
export declare interface FormOption {
  label: string
  value: string | number
}

export declare interface CurdTableColumnExtra {
  formType?: FormType,
  dataSources?: FormOption[]
  search?: boolean
  hideAdd?: boolean
  hideEdit?: boolean
  title?: string
  dataIndex?: string
  mode?: "multiple" | "tags"
  placeholder?: string
}

export declare type CurdTableColumn = ColumnType<CurdTableDataType> & CurdTableColumnExtra;

export declare interface CurdTableDataType {
  [prop: string]: any
}

export declare interface CurdTableProps {
  data: CurdTableDataType[],
  columns: CurdTableColumn[]
}