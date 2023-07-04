/*
<ListTable 
  tableHead={['랭킹', '계급', '이름', '획득MP', '취득 자격증 수']}
  tableData={[
    [<p className="...">1</p>, <img src="..." />, "김푸앙", 120, 8],
    [<p className="...">2</p>, <img src="..." />, "김대림", 110, 7],
    [<p className="...">3</p>, <img src="..." />, "박안양", 100, 7],
    ...
  ]} />
*/

import { useEffect, useState } from "react";

interface Props {
  tableHead: string[];
  tableData: Array<Array<React.ReactNode>>;
}

const ListTable = (props: Props) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []); // Prevent hydration error

  return (isMounted && 
  <table className="w-full text-center">
      <thead className="text-xs text-orange-600 border-b border-orange-600">
        {props.tableHead.map((thData) => <th className="font-medium">{thData}</th>)}
      </thead>
      <tbody>
        {props.tableData.map((row) => <tr>{row.map((col) => <td className="border-b border-orange-600 pt-1.5 pb-1.5">{col}</td>)}</tr>)}
      </tbody>
    </table>
  );
}

export default ListTable;