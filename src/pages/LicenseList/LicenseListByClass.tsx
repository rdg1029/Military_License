import Search from "./LicenseSearch"
import ListTable from "../ListTable";

const CLASSES = ["보병", "기갑", "포병", "방공", "정보", "공병", "정보통신", "항공", "화생방", "병기", "병참", "수송", "인사", "군사경찰", "재정", "공보정훈", "군수", "의무", "법무", "군종", "함정", "조함", "보급", "항공통제", "방공포병", "기상"];

const LicenseListByClass = () => {
  const dummyArray: React.ReactNode[][] = [];
  for (let i = 0; i < 25; i++) {
    dummyArray.push([<p key={i} className="text-xs text-lime-800">굴삭기운전기능사</p>, <p key={i} className="text-xs text-lime-800">146. 건설기계 운전</p>, <p key={i} className="text-xs text-lime-800">한국산업인력공단</p>])
  }

  return (
    <>
      <div className="flex flex-row pt-3 pb-1">
        <span className="text-lime-800 font-bold">나의 병과 (주특기) : </span>
        <span className="text-orange-600 pl-1 pr-2">공병</span>
        <select className="text-xs bg-orange-100 rounded-lg">
          <option>다른 병과 선택</option>
          {CLASSES.map((className, index) => <option key={index}>{className}</option>)}
        </select>
      </div>
      <Search />
      <div className="grow flex flex-col w-full overflow-y-scroll">
        <ListTable
          tableHead={["자격증", "증분류", "시행처"]}
          tableData={dummyArray} />
      </div>
    </>
  );
}

export default LicenseListByClass;