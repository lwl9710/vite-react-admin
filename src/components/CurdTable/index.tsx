import { useEffect, useState } from "react";

import { Table } from "antd";
import style from "./index.module.scss";
import usePagination from "./hooks/usePagination";
import SearchForm from "./components/SearchForm";

import { Space, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { CurdTableColumn } from "./types";

interface Props {
  columns?: CurdTableColumn[]
}

interface DataType {
  name: string;
  age: number;
  address: string;
  tags: string[];
}
const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = new Array(100).fill(null).map((a, index) => (  {
  key: index + '',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}));

const CurdTable: React.FC<Props> = (props: Props) => {
  const { pagination } = usePagination();

  useEffect(() => {
    console.log("分页组件变更", pagination);
  }, [pagination]);

  return (
    <div className={style["curd-table"]}>
      <SearchForm columns={props.columns} />
      <Table dataSource={data} columns={columns} pagination={pagination}></Table>
    </div>
  )
}

export default CurdTable;