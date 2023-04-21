import { useState, useCallback } from "react";
interface PaginationProps {
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

export default function(initialState?: PaginationProps) {
  const [pagination, setPagination] = useState<PaginationProps>(Object.assign({
    current: 1,
    pageSize: 10,
    total: 0,
    pageSizeOptions: [10, 20, 50, 100],
    defaultCurrent: 1,
    defaultPageSize: 10,
    disabled: false,
    hideOnSinglePage: true,
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: (total: number) => {
      return `共 ${total} 条`;
    },
    onChange: (current: number, pageSize: number) => {
      setPageParam({ current, pageSize });
    }
  }, initialState));

  const setPageParam = (pageParam: PaginationProps) => {
    setPagination(pagination => {
      return Object.assign({}, pagination, pageParam);
    });
  }
  
  return {
    pagination,
    setPagination: setPageParam
  }
}