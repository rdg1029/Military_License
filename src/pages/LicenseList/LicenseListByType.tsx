import Search from "./LicenseSearch"
import ListTable from "../ListTable";
import { useState } from "react";

const LicenseListByType = () => {
  const dummyArray: React.ReactNode[][] = [];
  for (let i = 0; i < 25; i++) {
    dummyArray.push([<p key={i} className="text-xs text-lime-800">굴삭기운전기능사</p>, <p key={i} className="text-xs text-lime-800">146. 건설기계 운전</p>, <p key={i} className="text-xs text-lime-800">한국산업인력공단</p>])
  }

  const [selectedType, setType] = useState("증분류 선택");
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setType(e.currentTarget.value);

  return (
    <>
      <div className="flex flex-row pt-3 pb-1">
        <span className="text-lime-800 font-bold">증분류 : </span>
        <span className="text-orange-600 pl-1 pr-2">{selectedType}</span>
        <select className="text-xs bg-orange-100 rounded-lg" onChange={onSelectChange}>
          <option>증분류 선택</option>
          <option>146. 건설기계 운전</option>
        </select>
      </div>
      <Search />
      <div className="grow flex flex-col w-full overflow-y-scroll">
        <ListTable
          tableHead={["자격증", "증분류", "시행처"]}
          tableData={dummyArray} />
      </div>
    </>
  );
}

export default LicenseListByType;