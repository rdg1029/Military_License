import Search from "./LicenseSearch"
import ListTable from "../ListTable";
import { useState, useEffect, ChangeEvent } from "react";
import { ClassEventMap } from "@/utils/ClassEventMap";
import { LICENSE_LIST_DATA } from "@/utils/DataClass";
import Link from "next/link";

interface Props {
  list: Array<LICENSE_LIST_DATA>;
  setSelectClassCode: any;
}

const LicenseListByClass = ({list , setSelectClassCode} : Props) => {
  const [isLoaded, setLoaded] = useState<Boolean>(false);
  const [selectClass, setSeletctClass] = useState<string>("병과 선택");
  const [listData, setListData] = useState<React.ReactNode[][]>([]);

  useEffect(() => {
    setListData(list.map((data, i) => [
      <Link key={i} href={`/LicenseInfo/${data.licenseCode}`}><p key={i} className="text-xs text-df-green underline">{data.strJmfldnm}</p></Link>,
      <p key={i} className="text-xs text-df-green">{data.strMdobligfldnm}</p>,
      <p key={i} className="text-xs text-df-green">{data.strSeriesnm}</p>
    ]));
    setLoaded(true);
  }, [list]);

  const ClassSelectHandler = (e : ChangeEvent<HTMLSelectElement>) => {
    let found = ClassEventMap.find(item => item.classCode === e.target.value);
    if(found != undefined) {
      setSeletctClass(found.className);
      setSelectClassCode(e.target.value);
    }
  }
  
  return (isLoaded ?
    <>
      <div className="flex flex-row pt-3 pb-1">
        <span className="text-df-green font-bold">나의 병과 (주특기) : </span>
        <span className="text-df-orange pl-1 pr-2">{selectClass}</span>
        <select className="text-xs bg-df-orange-opacity rounded-lg" value={selectClass} onChange={ClassSelectHandler}>
          <option>다른 병과 선택</option>
          {ClassEventMap.map((className, index) => <option key={index} value={className.classCode}>{className.className}</option>)}
        </select>
      </div>
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

export default LicenseListByClass;