import { useEffect, useState } from "react";
import ListPage from "../ListPage";
import ListAll from "./LicenseListAll";
import ListByClass from "./LicenseListByClass";
import ListByType from "./LicenseListByType";
import ListInOrder from "./LicenseListInOrder";
import axios from "axios";
import { ClassEventMap } from "@/utils/ClassEventMap";
import { LICENSE_LIST_COUNT_DATA, LICENSE_LIST_DATA } from "@/utils/DataClass";

const LicenseList = () => {
  const req = axios.create();
  const [isLoaded, setLoaded] = useState<Boolean>(false);
  const [listAll, setListAll] = useState<Array<LICENSE_LIST_DATA>>([]);
  const [selectClassCode, setSelectClassCode] = useState<string>();
  const [selectJmCode, setSelectJmCode] = useState<string>();
  const [listByClass, setListByClass] = useState<Array<LICENSE_LIST_DATA>>([]);
  const [listByType, setListByType] = useState<Array<LICENSE_LIST_DATA>>([]);
  const [listByCout, setListByCount] = useState<Array<LICENSE_LIST_COUNT_DATA>>(
    []
  );

  const reqGetListAll = () => {
    req
      .get("/api/license/getListAll")
      .then((res) => {
        setListAll(res.data.RESULT_DATA.data);
        setLoaded(true);
        // console.log(res);
        // console.log("all items loaded");
      })
      .catch((err) => console.log(err));
  }

  const reqGetListByCount = () => {
    req
      .get("/api/license/getListByCount")
      .then((res) => {
        setListByCount(res.data.RESULT_DATA.data);
        // console.log("count data loaded");
      })
      .catch((err) => console.log(err));
  }

  const reqGetListByClass = () => {
    let reqArray: Array<LICENSE_LIST_DATA> = [];
    let targetArray = ClassEventMap.find(
      (item) => item.classCode === selectClassCode
    );

    if (targetArray != undefined) {
      for (let i = 0; i < targetArray.eventArr.length; i++) {
        req
          .get(`/api/license/getListByCode/${targetArray.eventArr[i]}`)
          .then((res) => {
            for (let j = 0; j < res.data.RESULT_DATA.data.length; j++) {
              reqArray.push(res.data.RESULT_DATA.data[j]);
            }
            setListByClass(reqArray);
            // console.log("all items of listByClass loaded");
          })
          .catch((err) => console.log(err));
      }
    }
  }

  const reqGetListByType = () => {
    req
      .get(`/api/license/getListByCode/${selectJmCode}`)
      .then((res) => {
        // console.log(res);
        setListByType(res.data.RESULT_DATA.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    reqGetListAll();
    reqGetListByCount();
    reqGetListByClass();
    reqGetListByType();
  }, []);

  return isLoaded ? (
    <>
      <ListPage
        title="국가 기술 자격증 추천"
        tabs={[
          { name: "전체 자격증", component: <ListAll list={listAll} /> },
          {
            name: "병과별 추천",
            component: (
              <ListByClass
                list={listByClass}
                setSelectClassCode={setSelectClassCode}
              />
            ),
          },
          {
            name: "분야별 추천",
            component: (
              <ListByType list={listByType} setSelectJmCode={setSelectJmCode} />
            ),
          },
          { name: "전체 취득순", component: <ListInOrder list={listByCout} /> },
        ]}
      />
    </>
  ) : (
    <div>로딩중...</div>
  );
};

export default LicenseList;
