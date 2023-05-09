import { useEffect, useState } from "react";
import { Table } from "antd";
import { CurdTableProps, CurdTableColumn } from "../../types";
import usePagination from "../../hooks/usePagination";

const CurdTable: React.FC<CurdTableProps> = (props: CurdTableProps) => {
  const [columns, setColumns] = useState<CurdTableColumn[]>([]);
  const [pagination, setPagination] = usePagination(props.pagination);

  // 同步字段更新
  useEffect(() => {
    const newColumns = props.columns.filter(column => !column.hide);
    setColumns(newColumns);
  }, [props.columns]);

  // 同步分页更新
  useEffect(() => {
    setPagination(props.pagination || {});
  }, [props.pagination]);

  return (
    <Table dataSource={props.data} columns={columns} pagination={pagination}></Table>
  )
}

export default CurdTable;