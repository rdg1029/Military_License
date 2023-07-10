import React, { useEffect, useState } from "react";
import ListTable from "../ListTable";
import { USER_LICENSE_ITEM } from "@/utils/DataClass";

{
  /* <ListTable 
  tableHead={['랭킹', '계급', '이름', '획득MP', '취득 자격증 수']}
  tableData={[
    [<p className="...">1</p>, <img src="..." />, "김푸앙", 120, 8],
    [<p className="...">2</p>, <img src="..." />, "김대림", 110, 7],
    [<p className="...">3</p>, <img src="..." />, "박안양", 100, 7],
    ...
  ]} /> */
}

interface Props {
  list: Array<USER_LICENSE_ITEM>;
}

const UserLicenseList = ({ list }: Props) => {
  const [userLicenseList, setUserLicenseList] = useState<React.ReactNode[][]>(
    []
  );

  useEffect(() => {
    if (list === undefined) return;
    let tmpArray: React.ReactNode[][] = [];

    for (let i = 0; i < list.length; i++) {
      tmpArray.push([
        <p key={i} className="text-xl text-df-green">
          {list[i].name}
        </p>,
        <p key={i} className="text-xl text-df-green">
          {list[i].date}
        </p>,
      ]);
    }
    setUserLicenseList(tmpArray);
  }, [list]);
  return (
    <>
      <div className="flex justify-center items-center w-85 h-full bg-df-orange-opacity drop-shadow-md rounded-2xl">
        <div className="w-80 m-5">
          <ListTable
            tableHead={["자격증", "취득일"]}
            tableData={userLicenseList}
          />
        </div>
      </div>
    </>
  );
};

export default UserLicenseList;
