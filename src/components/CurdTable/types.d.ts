import type { ColumnType } from 'antd/es/table';
import type { UploadListType } from "antd/es/upload/interface";

export declare type FormType = "text" | "picture" | "textarea" | "radio" | "checkbox" | "select" | "date" | "datetime" | "dateRange" | "datetimeRange";

export declare interface FormOption {
  label: string
  value: string | number
}

export declare interface UploadOption {
  accept?: string
  name?: string
  listType?: UploadListType
  showUploadList?: boolean
  headers?: HttpRequestHeader;
  beforeUpload?: (file: File) => boolean
  onChange?: (info: UploadChangeParam<UploadFile>) => void
  action: string
}

export interface PaginationProps {
  size?: "default" | "small"
  current?: number
  pageSize?: number
  total?: number
  pageSizeOptions?: number[]
  defaultCurrent?: number
  defaultPageSize?: number
  disabled?: boolean
  hideOnSinglePage?: boolean
  showQuickJumper?: boolean
  showSizeChanger?: boolean
  showTotal?: (total: number, range: any[]) => string
  onChange?: (page: number, pageSize: number) => void
  onShowSizeChange?: (current: number, size: number) => void
}

export declare interface CurdTableColumnExtra {
  formType?: FormType,
  dataSource?: FormOption[]
  search?: boolean
  hideAdd?: boolean
  hideEdit?: boolean
  hide?: boolean
  title?: string
  dataIndex?: string
  mode?: "multiple" | "tags"
  placeholder?: string | [string, string]
  uploadOption?: UploadOption
}

export declare type CurdTableColumn = ColumnType<CurdTableDataType> & CurdTableColumnExtra;

export declare interface CurdTableDataType {
  [prop: string]: any
}

export declare interface CurdTableProps {
  data: CurdTableDataType[]
  columns: CurdTableColumn[]
  pagination?: PaginationProps
  onSearch?: (params: any) => void
  onEdit?: (params: any) => void
  onAdd?: (params: any) => void
}