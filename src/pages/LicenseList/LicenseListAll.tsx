import Search from "./LicenseSearch"
import ListTable from "../ListTable";
import { useEffect, useState } from "react";
import { LICENSE_LIST_DATA } from "@/utils/DataClass";

interface Props {
  list: Array<LICENSE_LIST_DATA>;
}

const LicenseListAll = (props: Props) => {
  const [isLoaded, setLoaded] = useState<Boolean>(false);
  const [listData, setListData] = useState<React.ReactNode[][]>([]);
  // const listData: React.ReactNode[][] = [];

  useEffect(() => {
    setListData(props.list.map((data, i) => [
      <p key={i} className="text-xs text-df-green">{data.strJmfldnm}</p>,
      <p key={i} className="text-xs text-df-green">{data.strMdobligfldnm}</p>,
      <p key={i} className="text-xs text-df-green">{data.strSeriesnm}</p>
    ]));
    setLoaded(true);
  }, []);

  return (isLoaded ?
    <>
      <Search />
      <div className="grow flex flex-col w-full overflow-y-scroll">
        <ListTable
          tableHead={["자격증", "증분류", "계열"]}
          tableData={listData} />
      </div>
    </>
    :
    <div>로딩중...</div>
  );
}

export default LicenseListAll;