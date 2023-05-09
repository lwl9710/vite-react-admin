import style from "./index.module.scss";
import Table from "./components/Table";
import SearchForm from "./components/SearchForm";
import { CurdTableProps } from "./types";

const CurdTable: React.FC<CurdTableProps> = (props: CurdTableProps) => {
  return (
    <div className={style["curd-table"]}>
      <SearchForm columns={props.columns} />
      <Table {... props} />
    </div>
  )
}

export default CurdTable;