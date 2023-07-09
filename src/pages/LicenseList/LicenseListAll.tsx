import Search from "./LicenseSearch"
import ListTable from "../ListTable";
import { useEffect, useState } from "react";
import { LICENSE_LIST_DATA } from "@/utils/DataClass";
import Link from "next/link";

interface Props {
  list: Array<LICENSE_LIST_DATA>;
}

const LicenseListAll = (props: Props) => {
  const [isLoaded, setLoaded] = useState<Boolean>(false);
  const [listData, setListData] = useState<React.ReactNode[][]>([]);
  // const listData: React.ReactNode[][] = [];

  useEffect(() => {
    setListData(props.list.map((data, i) => [
      <Link key={i} href={`/LicenseInfo/${data.licenseCode}`}><p key={i} className="text-xs text-df-green underline">{data.strJmfldnm}</p></Link>,
      <p key={i} className="text-xs text-df-green">{data.strMdobligfldnm}</p>,
      <p key={i} className="text-xs text-df-green">{data.strSeriesnm}</p>
    ]));
    setLoaded(true);
  }, []);

  return (isLoaded ?
    <>
      {/* <Search /> */}
      <div className="grow flex flex-col w-full overflow-y-scroll">
        <ListTable
          tableHead={["자격증", "증분류", "구분"]}
          tableData={listData} />
      </div>
    </>
    :
    <div>로딩중...</div>
  );
}

export default LicenseListAll;