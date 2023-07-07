import React from "react";
import ListPage from "../ListPage";
import ListAll from "./RankListAll";

const RankList = () => {
  return(
    <ListPage
      title="밀리센스 랭킹"
      tabs={[
        {name: "우리 부대 랭킹", component: <ListAll />},
        // {name: "병과별 추천", component: <ListByClass />},
        // {name: "분야별 추천", component: <ListByType />},
        // {name: "전체 취득순", component: <ListInOrder />},
      ]} />
  );
};

export default RankList;