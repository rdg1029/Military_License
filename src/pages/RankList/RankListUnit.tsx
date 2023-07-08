import { useState, useEffect } from "react";
import { RANK_UNIT_DATA } from "@/utils/DataClass";
import ListTable from "../ListTable";

interface Props {
  list: Array<RANK_UNIT_DATA>;
}

const RankListUnit = ({ list }: Props) => {
  const [rankData, setRankData] = useState<React.ReactNode[][]>([]);

  useEffect(() => {
    let tmpArray: React.ReactNode[][] = [];
    for (let i = 0; i < list.length; i++) {
      if (i + 1 === 1) {
        tmpArray.push([
          <p key={i} className="text-2xl text-df-gold">
            {i + 1}
          </p>,
          <p key={i} className="text-xl text-df-green">
            {list[i].name}
          </p>,
          <p key={i} className="text-2xl text-df-green">
            {list[i].mp}
          </p>,
        ]);
      } else if (i + 1 === 2) {
        tmpArray.push([
          <p key={i} className="text-2xl text-df-silver">
            {i + 1}
          </p>,
          <p key={i} className="text-xl text-df-green">
            {list[i].name}
          </p>,
          <p key={i} className="text-2xl text-df-green">
            {list[i].mp}
          </p>,
        ]);
      } else if (i + 1 === 3) {
        tmpArray.push([
          <p key={i} className="text-2xl text-df-bronze">
            {i + 1}
          </p>,
          <p key={i} className="text-xl text-df-green">
            {list[i].name}
          </p>,
          <p key={i} className="text-2xl text-df-green">
            {list[i].mp}
          </p>,
        ]);
      } else {
        tmpArray.push([
          <p key={i} className="text-2xl text-df-green">
            {i + 1}
          </p>,
          <p key={i} className="text-xl text-df-green">
            {list[i].name}
          </p>,
          <p key={i} className="text-2xl text-df-green">
            {list[i].mp}
          </p>,
        ]);
      }
    }

    setRankData(tmpArray);
  }, [list]);

  return (
    <div className="grow flex flex-col w-full overflow-y-scroll">
      <ListTable
        tableHead={["랭킹", "부대명", "획득 MP"]}
        tableData={rankData}
      />
    </div>
  );
};

export default RankListUnit;
