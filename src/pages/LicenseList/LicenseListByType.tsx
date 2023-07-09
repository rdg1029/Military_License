import Search from "./LicenseSearch";
import ListTable from "../ListTable";
import { useState, useEffect } from "react";
import Link from "next/link";
import { LICENSE_LIST_DATA } from "@/utils/DataClass";
import { JmMap } from "@/utils/LicenseJmMap";

interface Props {
  list: Array<LICENSE_LIST_DATA>;
  setSelectJmCode: any;
}

const LicenseListByType = ({ list, setSelectJmCode }: Props) => {
  const [isLoaded, setLoaded] = useState<Boolean>(false);
  const [type, setType] = useState("종목 선택");
  const [listData, setListData] = useState<React.ReactNode[][]>([]);

  useEffect(() => {
    setListData(
      list.map((data, i) => [
        <Link key={i} href={`/LicenseInfo/${data.licenseCode}`}>
          <p key={i} className="text-xs text-df-green underline">
            {data.strJmfldnm}
          </p>
        </Link>,
        <p key={i} className="text-xs text-df-green">
          {data.strMdobligfldnm}
        </p>,
        <p key={i} className="text-xs text-df-green">
          {data.strSeriesnm}
        </p>,
      ])
    );
    setLoaded(true);
  }, [list]);

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let found = JmMap.find((item) => item.JmCode === e.target.value);
    if (found != undefined) {
      setType(found.JmName);
      setSelectJmCode(e.target.value);
    }
  };

  return (
    <>
      <div className="flex flex-row pt-3 pb-1">
        <span className="text-df-green font-bold">종목 : </span>
        <span className="text-df-orange pl-1 pr-2">{type}</span>
        <select
          className="text-xs bg-df-orange-opacity rounded-lg"
          onChange={onSelectChange}
        >
          <option>증분류 선택</option>
          {JmMap.map((JmName, index) => (
            <option key={index} value={JmName.JmCode}>
              {JmName.JmName}
            </option>
          ))}
        </select>
      </div>
      {/* <Search /> */}
      <div className="grow flex flex-col w-full overflow-y-scroll">
        <ListTable
          tableHead={["자격증", "종목", "구분"]}
          tableData={listData}
        />
      </div>
    </>
  );
};

export default LicenseListByType;
