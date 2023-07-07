import React from "react";
import ListPage from "../ListPage";
import ListAll from "./RankListAll";
import ListANA from "./RankListANA";
import ListUnit from "./RankListUnit";

const RankList = () => {
  return(
    <ListPage
      title="밀리센스 랭킹"
      tabs={[
        {name: "군종별 랭킹", component: <ListANA/>},
        {name: "부대별 랭킹", component: <ListUnit/>},
        {name: "우리 부대 랭킹", component: <ListAll/>}
      ]} />
  );
};

export default RankList;