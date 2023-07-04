import Search from "./LicenseSearch"
import ListTable from "../ListTable";

const LicenseListAll = () => {
  const dummyArray: React.ReactNode[][] = [];
  for (let i = 0; i < 25; i++) {
    dummyArray.push([<p key={i} className="text-xs text-lime-800">굴삭기운전기능사</p>, <p className="text-xs text-lime-800">146. 건설기계 운전</p>, <p className="text-xs text-lime-800">한국산업인력공단</p>])
  }

  return (
    <>
      <Search />
      <div className="grow flex flex-col w-full overflow-y-scroll">
        <ListTable
          tableHead={["자격증", "증분류", "시행처"]}
          tableData={dummyArray} />
      </div>
    </>
  );
}

export default LicenseListAll;