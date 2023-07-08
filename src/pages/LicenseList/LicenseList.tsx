import { useEffect, useState } from "react";
import ListPage from "../ListPage";
import ListAll from "./LicenseListAll";
import ListByClass from "./LicenseListByClass";
import ListByType from "./LicenseListByType";
import ListInOrder from "./LicenseListInOrder";
import axios from "axios";
import { LICENSE_LIST_DATA } from "@/utils/DataClass";

const LicenseList = () => {
  const [isLoaded, setLoaded] = useState<Boolean>(false);
  const [listAll, setListAll] = useState<Array<LICENSE_LIST_DATA>>([]);

  useEffect(() => {
    const req = axios.create();
    req.get("/api/license/getListAll")
    .then(res => {
      setListAll(res.data.RESULT_DATA.data);
      setLoaded(true);
      console.log(res);
      console.log("all items loaded");
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <ListPage
      title="국가 기술 자격증 추천"
      tabs={[
        {name: "전체 자격증", component: <ListAll list={listAll} />},
        {name: "병과별 추천", component: <ListByClass />},
        {name: "분야별 추천", component: <ListByType />},
        {name: "전체 취득순", component: <ListInOrder />},
      ]} />
  );
}

export default LicenseList;