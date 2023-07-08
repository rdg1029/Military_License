import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth"
import { initFirebase } from "@/utils/FirebaseUtil";
import axios from "axios";

interface UnitInfo {
  mp: number;
  name: string;
}

const UserInfoEditor = () => {
  const req = axios.create();
  const [userInfo, setUserInfo] = useState<User | null>()

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [milRank, setMilRank] = useState("계급 선택");
  const [milType, setMilType] = useState("군종 선택");
  const [unit, setUnit] = useState("부대 선택");
  const [comment, setComment] = useState("");

  const [armyUnits, setArmyUnits] = useState<UnitInfo[]>([]);
  const [navyUnits, setNavyUnits] = useState<UnitInfo[]>([]);
  const [airforceUnits, setAirfoeceUnits] = useState<UnitInfo[]>([]);

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value);
  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.currentTarget.value);
  const onMilRankChange = (e: React.ChangeEvent<HTMLSelectElement>) => setMilRank(e.currentTarget.value);
  const onMilTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => setMilType(e.currentTarget.value);
  const onUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => setUnit(e.currentTarget.value);
  const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => setComment(e.currentTarget.value);

  const onCancelClick = (e: React.MouseEvent) => {
    if (window.confirm("취소하시겠습니까?")) {
      window.location.replace("/");
    }
  }
  const onSubmitClick = (e: React.MouseEvent) => {
    if (window.confirm("저장하시겠습니까?")) {
      req.post(`/api/profile/registerUser/${userInfo?.uid}`, {
        "comment": comment,
        "email": userInfo?.email,
        "military_rank": milRank,
        "military_type": milType,
        "name": name,
        "phone": phone,
        "unit": unit
      });
    }
  }

  useEffect(() => {
    req.get("/api/unit/getUnitList/army").then(res => setArmyUnits(res.data.RESULT_DATA.list)).catch(err => console.log(err));
    req.get("/api/unit/getUnitList/navy").then(res => setNavyUnits(res.data.RESULT_DATA.list)).catch(err => console.log(err));
    req.get("/api/unit/getUnitList/airforce").then(res => setAirfoeceUnits(res.data.RESULT_DATA.list)).catch(err => console.log(err));

    initFirebase();
    onAuthStateChanged(getAuth(), user => setUserInfo(user));
  }, []);

  return (
    <div className="flex flex-col w-full pt-10 pr-5 pl-5">
      <h1 className="text-3xl text-df-orange font-bold">회원정보 입력</h1>
      
      <p className="text-df-orange pt-4">이름</p>
      <div className="flex bg-orange-100 rounded-lg drop-shadow mt-1 mb-2.5 pt-1 pr-2 pb-1 pl-2">
        <input className="grow bg-transparent text-sm text-df-green" type="text" placeholder="이름 입력" value={name} onChange={onNameChange}></input>
      </div>

      <p className="text-df-orange pt-4">휴대폰 번호</p>
      <div className="flex bg-orange-100 rounded-lg drop-shadow mt-1 mb-2.5 pt-1 pr-2 pb-1 pl-2">
        <input className="grow bg-transparent text-sm text-df-green" type="text" placeholder="번호 입력 ( - 제외)" pattern="\d*" value={phone} maxLength={11} onChange={onPhoneChange}></input>
      </div>

      <p className="text-df-orange pt-4">계급 선택</p>
      <select className="text-sm text-df-green bg-orange-100 rounded-lg pt-1 pr-2 pb-1 pl-2" value={milRank} onChange={onMilRankChange}>
        <option>계급 선택</option>
        <option>이등병</option>
        <option>일병</option>
        <option>상병</option>
        <option>병장</option>
        <option>하사</option>
        <option>중사</option>
        <option>상사</option>
        <option>원사</option>
        <option>준위</option>
      </select>

      <p className="text-df-orange pt-4">군종 선택</p>
      <select className="text-sm text-df-green bg-orange-100 rounded-lg pt-1 pr-2 pb-1 pl-2" value={milType} onChange={onMilTypeChange}>
        <option>군종 선택</option>
        <option>육군</option>
        <option>해군</option>
        <option>공군</option>
      </select>

      {milType === "군종 선택" ? <></> :
      <>
        <p className="text-df-orange pt-4">부대 선택</p>
        <select className="text-sm text-df-green bg-orange-100 rounded-lg pt-1 pr-2 pb-1 pl-2" value={unit} onChange={onUnitChange}>
        {milType === "육군" && armyUnits.map(unit => <option>{unit.name}</option>)}
        {milType === "해군" && navyUnits.map(unit => <option>{unit.name}</option>)}
        {milType === "공군" && airforceUnits.map(unit => <option>{unit.name}</option>)}
        </select>
      </>
      }

      <p className="text-df-orange pt-4">한줄 소개</p>
      <div className="flex bg-orange-100 rounded-lg drop-shadow mt-1 mb-2.5 pt-1 pr-2 pb-1 pl-2">
        <input className="grow bg-transparent text-sm text-df-green" type="text" placeholder="한줄 소개 입력" value={comment} onChange={onCommentChange}></input>
      </div>

      <div className="flex flex-row w-full justify-center mt-4">
        <button className="text-df-green text-xl border rounded-2xl border-df-orange pt-2 pr-4 pb-2 pl-4 mr-4" onClick={onCancelClick}>취소</button>
        <button className="text-white text-xl border rounded-2xl bg-df-orange pt-2 pr-4 pb-2 pl-4 ml-4" onClick={onSubmitClick}>저장</button>
      </div>
    </div>
  );
}

export default UserInfoEditor;