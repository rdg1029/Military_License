import React, { use, useEffect, useState } from "react";
import axios from "axios";
import ListPage from "../ListPage";
import ListAll from "./RankListAll";
import ListANA from "./RankListANA";
import ListUnit from "./RankListUnit";
import {
  RANK_BRANCH_DATA,
  RANK_UNIT_DATA,
  RANK_USER_DATA,
} from "@/utils/DataClass";

const RankList = () => {
  const [rankByBranch, setRankByBranch] = useState<Array<RANK_BRANCH_DATA>>([]);
  const [rankByUnit, setRankByUnit] = useState<Array<RANK_UNIT_DATA>>([]);
  const [rankFromUnit, setRankFromUnit] = useState<Array<RANK_USER_DATA>>([]);

  useEffect(() => {
    const req = axios.create();
    req
      .get("/api/ranking/getRankByBranch")
      .then((res) => {
        setRankByBranch(res.data.RESULT_DATA.data);
        console.log(res);
        console.log("Rank By Branch Items Loaded");
      })
      .catch((err) => console.log(err));

    req
      .get("/api/ranking/getRankByUnit")
      .then((res) => {
        setRankByUnit(res.data.RESULT_DATA.data);
        console.log(res);
        console.log("Rank By Unit Items Loaded");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ListPage
      title="밀리센스 랭킹"
      tabs={[
        { name: "군종별 랭킹", component: <ListANA list={rankByBranch} /> },
        { name: "부대별 랭킹", component: <ListUnit list={rankByUnit}/> },
        { name: "우리 부대 랭킹", component: <ListAll /> },
      ]}
    />
  );
};

export default RankList;
