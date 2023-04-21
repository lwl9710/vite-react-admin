import type { ColumnsType } from 'antd/es/table';
declare type FormType = "text" | "file" | "textarea" | "radio" | "select";
export declare interface CurdTableColumn {
  formType?: FormType,
  search?: boolean
  hideAdd?: boolean
  hideEdit?: boolean
}

export declare interface CurdTableDataType {
  key: string
  [prop: string]: any
}



export declare interface CurdTableProps {
  data: CurdTableDataType[],
  columns: ColumnsType<CurdTableColumn>[]
}