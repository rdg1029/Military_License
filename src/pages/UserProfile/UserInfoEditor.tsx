import { useState } from "react";

const UserInfoEditor = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [milRank, setMilRank] = useState("계급 선택");
  const [milType, setMilType] = useState("군종 선택");
  const [unit, setUnit] = useState("부대 선택");
  const [comment, setComment] = useState("");

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value);
  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.currentTarget.value);
  const onMilRankChange = (e: React.ChangeEvent<HTMLSelectElement>) => setMilRank(e.currentTarget.value);
  const onMilTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => setMilType(e.currentTarget.value);
  const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => setComment(e.currentTarget.value);

  return (
    <div className="flex flex-col w-full pt-10 pr-5 pl-5">
      <h1 className="text-3xl text-df-orange font-bold">회원정보 입력</h1>
      
      <p className="text-df-orange pt-4">이름</p>
      <div className="flex bg-orange-100 rounded-lg drop-shadow mt-1 mb-2.5 pt-1 pr-2 pb-1 pl-2">
        <input className="grow bg-transparent text-sm" type="text" placeholder="이름 입력" onChange={onNameChange}></input>
      </div>

      <p className="text-df-orange pt-4">휴대폰 번호</p>
      <div className="flex bg-orange-100 rounded-lg drop-shadow mt-1 mb-2.5 pt-1 pr-2 pb-1 pl-2">
        <input className="grow bg-transparent text-sm" type="text" placeholder="번호 입력 (- 제외)" pattern="\d*" maxLength={11} onChange={onPhoneChange}></input>
      </div>

      <p className="text-df-orange pt-4">계급 선택</p>
      <select className="text-sm bg-orange-100 rounded-lg pt-1 pr-2 pb-1 pl-2" onChange={onMilRankChange}>
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
      <select className="text-sm bg-orange-100 rounded-lg pt-1 pr-2 pb-1 pl-2" onChange={onMilTypeChange}>
        <option>군종 선택</option>
        <option>육군</option>
        <option>해군</option>
        <option>공군</option>
      </select>

      {milType === "군종 선택" ? <></> :
      <>
        <p className="text-df-orange pt-4">부대 선택</p>
        <select className="text-sm bg-orange-100 rounded-lg pt-1 pr-2 pb-1 pl-2">
        <option>부대 선택</option>
        </select>
      </>
      }

      <p className="text-df-orange pt-4">한줄 소개</p>
      <div className="flex bg-orange-100 rounded-lg drop-shadow mt-1 mb-2.5 pt-1 pr-2 pb-1 pl-2">
        <input className="grow bg-transparent text-sm" type="text" placeholder="한줄 소개 입력" onChange={onCommentChange}></input>
      </div>

    </div>
  );
}

export default UserInfoEditor;