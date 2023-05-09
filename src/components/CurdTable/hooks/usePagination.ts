import { useState } from "react";
import type { PaginationProps } from "../types";

export default function(initialState?: PaginationProps): [ PaginationProps,  (pageParam: PaginationProps) => void] {
  let { onChange, ...params } = initialState || {};
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
      onChange && onChange(current, pageSize);
    }
  }, params));

  const setPageParam = (pageParam: PaginationProps) => {
    setPagination(pagination => {
      const { onChange: newOnchange, ...params } = pageParam;
      if(newOnchange) {
        onChange = newOnchange;
      }
      return Object.assign({}, pagination, params);
    });
  }
  
  return [pagination, setPageParam]
}