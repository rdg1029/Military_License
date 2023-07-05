import React from "react";
import ListTable from "../ListTable";

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

const UserLicenseList = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-85 h-full bg-df-orange-opacity drop-shadow-sm rounded-3xl">
        <div className="w-80 m-5">
          <ListTable
            tableHead={["자격증", "취득일"]}
            tableData={[
              ["정보처리산업기사", "2023.04.27"],
              ["굴착기운전기능사", "2023.04.12"],
              ["집에가는기능사", "2019.12.12"],
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default UserLicenseList;
