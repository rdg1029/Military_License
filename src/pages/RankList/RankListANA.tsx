import { RANK_BRANCH_DATA } from "@/utils/DataClass";
import ListTable from "../ListTable";
import { useEffect, useState } from "react";

interface Props {
  list: Array<RANK_BRANCH_DATA>;
}
// ANA : Army Navy AirForce
const RankListANA = ({ list }: Props) => {
  const [rankData, setRankData] = useState<React.ReactNode[][]>([]);

  useEffect(() => {
    let tmpArray: React.ReactNode[][] = [];

    for (let i = 0; i < list.length; i++) {
      if (i + 1 === 1) {
        if(list[i].name === "airforce") {
          tmpArray.push([
            <p key={i + 1} className="text-2xl text-df-gold">
              {i + 1}
            </p>,
            <p key={i + 1} className="text-xl text-df-green">
              대한민국 공군
            </p>,
            <p key={i + 1} className="text-2xl text-df-green">
              {list[i].mp}
            </p>,
          ]);
        } else if(list[i].name === "army") {
          tmpArray.push([
            <p key={i + 1} className="text-2xl text-df-gold">
              {i + 1}
            </p>,
            <p key={i + 1} className="text-xl text-df-green">
              대한민국 육군
            </p>,
            <p key={i + 1} className="text-2xl text-df-green">
              {list[i].mp}
            </p>,
          ]);
        } else {
          tmpArray.push([
            <p key={i + 1} className="text-2xl text-df-gold">
              {i + 1}
            </p>,
            <p key={i + 1} className="text-xl text-df-green">
              대한민국 해군
            </p>,
            <p key={i + 1} className="text-2xl text-df-green">
              {list[i].mp}
            </p>,
          ]);
        }
        
      } else if (i + 1 === 2) {
        if(list[i].name === "airforce") {
          tmpArray.push([
            <p key={i + 1} className="text-2xl text-df-silver">
              {i + 1}
            </p>,
            <p key={i + 1} className="text-xl text-df-green">
              대한민국 공군
            </p>,
            <p key={i + 1} className="text-2xl text-df-green">
              {list[i].mp}
            </p>,
          ]);
        } else if(list[i].name === "army") {
          tmpArray.push([
            <p key={i + 1} className="text-2xl text-df-silver">
              {i + 1}
            </p>,
            <p key={i + 1} className="text-xl text-df-green">
              대한민국 육군
            </p>,
            <p key={i + 1} className="text-2xl text-df-green">
              {list[i].mp}
            </p>,
          ]);
        } else {
          tmpArray.push([
            <p key={i + 1} className="text-2xl text-df-silver">
              {i + 1}
            </p>,
            <p key={i + 1} className="text-xl text-df-green">
              대한민국 해군
            </p>,
            <p key={i + 1} className="text-2xl text-df-green">
              {list[i].mp}
            </p>,
          ]);
        }
      } else if (i + 1 === 3) {
        if(list[i].name === "airforce") {
          tmpArray.push([
            <p key={i + 1} className="text-2xl text-df-bronze">
              {i + 1}
            </p>,
            <p key={i + 1} className="text-xl text-df-green">
              대한민국 공군
            </p>,
            <p key={i + 1} className="text-2xl text-df-green">
              {list[i].mp}
            </p>,
          ]);
        } else if(list[i].name === "army") {
          tmpArray.push([
            <p key={i + 1} className="text-2xl text-df-bronze">
              {i + 1}
            </p>,
            <p key={i + 1} className="text-xl text-df-green">
              대한민국 육군
            </p>,
            <p key={i + 1} className="text-2xl text-df-green">
              {list[i].mp}
            </p>,
          ]);
        } else {
          tmpArray.push([
            <p key={i + 1} className="text-2xl text-df-bronze">
              {i + 1}
            </p>,
            <p key={i + 1} className="text-xl text-df-green">
              대한민국 해군
            </p>,
            <p key={i + 1} className="text-2xl text-df-green">
              {list[i].mp}
            </p>,
          ]);
        }
      } else {
        if(list[i].name === "airforce") {
          tmpArray.push([
            <p key={i + 1} className="text-2xl text-df-green">
              {i + 1}
            </p>,
            <p key={i + 1} className="text-xl text-df-green">
              대한민국 공군
            </p>,
            <p key={i + 1} className="text-2xl text-df-green">
              {list[i].mp}
            </p>,
          ]);
        } else if(list[i].name === "army") {
          tmpArray.push([
            <p key={i + 1} className="text-2xl text-df-green">
              {i + 1}
            </p>,
            <p key={i + 1} className="text-xl text-df-green">
              대한민국 육군
            </p>,
            <p key={i + 1} className="text-2xl text-df-green">
              {list[i].mp}
            </p>,
          ]);
        } else {
          tmpArray.push([
            <p key={i + 1} className="text-2xl text-df-green">
              {i + 1}
            </p>,
            <p key={i + 1} className="text-xl text-df-green">
              대한민국 해군
            </p>,
            <p key={i + 1} className="text-2xl text-df-green">
              {list[i].mp}
            </p>,
          ]);
        }
      }
    }

    setRankData(tmpArray);
  }, [list]);

  return (
    <div className="grow flex flex-col w-full overflow-y-scroll">
      <ListTable tableHead={["랭킹", "군종", "총 MP"]} tableData={rankData} />
    </div>
  );
};

export default RankListANA;
