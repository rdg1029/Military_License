import Search from "./LicenseSearch"
import ListTable from "../ListTable";
import { useState, useEffect } from "react";
import { LICENSE_LIST_COUNT_DATA } from "@/utils/DataClass";

interface Props {
  list: Array<LICENSE_LIST_COUNT_DATA>;
}


const LicenseListInOrder = ({list} : Props) => {
  const [listData, setListData] = useState<React.ReactNode[][]>([]);

  useEffect(() => {
    setListData(list.map((data, i) => [
      <p key={i} className="text-xs text-df-green">{data.strJmfldnm}</p>,
      <p key={i} className="text-xs text-df-green">{data.strMdobligfldnm}</p>,
      <p key={i} className="text-xs text-df-green">{data.strSeriesnm}</p>
    ]));
  }, []);

  return (
    <>
      <Search />
      <div className="grow flex flex-col w-full overflow-y-scroll">
        <ListTable
          tableHead={["자격증", "종목", "구분"]}
          tableData={listData} />
      </div>
    </>
  );
}

export default LicenseListInOrder;