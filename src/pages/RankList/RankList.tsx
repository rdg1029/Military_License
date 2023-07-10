import React, { use, useEffect, useState } from "react";
import axios from "axios";
import ListPage from "../ListPage";
import ListANA from "./RankListANA";
import ListUnit from "./RankListUnit";
import {
  RANK_BRANCH_DATA,
  RANK_UNIT_DATA,
  RANK_USER_DATA,
} from "@/utils/DataClass";
import { initFirebase } from "@/utils/FirebaseUtil";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const RankList = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [rankByBranch, setRankByBranch] = useState<Array<RANK_BRANCH_DATA>>([]);
  const [rankByUnit, setRankByUnit] = useState<Array<RANK_UNIT_DATA>>([]);
  const [rankFromUnit, setRankFromUnit] = useState<Array<RANK_USER_DATA>>([]);
  const req = axios.create();

  useEffect(() => {
    initFirebase();
    onAuthStateChanged(getAuth(), user => {
      req
      .get("/api/ranking/getRankByBranch")
      .then((res) => {
        setRankByBranch(res.data.RESULT_DATA.data);
        // console.log(res);
        // console.log("Rank By Branch Items Loaded");
      })
      .catch((err) => console.log(err));

    req
      .get("/api/ranking/getRankByUnit")
      .then((res) => {
        setRankByUnit(res.data.RESULT_DATA.data);
        // console.log(res);
        // console.log("Rank By Unit Items Loaded");
      })
      .catch((err) => console.log(err));

      req
        .get(`/api/profile/getUserData/${user?.uid}`)
        .then((res) => {
          req
            .get(`/api/ranking/getRankFromUnit/${res.data.RESULT_DATA.unit}`)
            .then(res => {
              setRankFromUnit(res.data.RESULT_DATA.data);
            })
            .catch(err => console.log(err));
      })
      .catch((err) => console.log(err));
    })
    setLoaded(true);
  }, []);

  return (isLoaded ?
    <ListPage
      title="밀리센스 랭킹"
      tabs={[
        { name: "군종별 랭킹", component: <ListANA list={rankByBranch} /> },
        { name: "부대별 랭킹", component: <ListUnit list={rankByUnit} /> },
        // { name: "우리 부대 랭킹", component: <ListAll list={rankFromUnit} /> },
      ]}
    />
    :
    <p>로딩중...</p>
  );
};

export default RankList;
