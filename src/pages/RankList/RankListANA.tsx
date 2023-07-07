import ListTable from "../ListTable";

// ANA : Army Navy AirForce
const RankListANA = () => {
  const dummyArray: React.ReactNode[][] = [];
  dummyArray.push([<p key={1} className="text-2xl text-yellow-500">1</p>, <p key={1} className="text-xl text-df-green">대한민국 육군</p>, <p key={1} className="text-2xl text-df-green">5600</p>, <p key={1} className="text-2xl text-df-green">2800</p>]);
  dummyArray.push([<p key={2} className="text-2xl text-blue-900">2</p>, <p key={2} className="text-xl text-df-green">대한민국 공군</p>, <p key={2} className="text-2xl text-df-green">5000</p>, <p key={2} className="text-2xl text-df-green">2767</p>]);
  dummyArray.push([<p key={3} className="text-2xl text-orange-900">3</p>, <p key={3} className="text-xl text-df-green">대한민국 해군</p>, <p key={3} className="text-2xl text-df-green">4800</p>, <p key={3} className="text-2xl text-df-green">2568</p>]);
  dummyArray.push([<p key={4} className="text-2xl text-df-green">4</p>, <p key={4} className="text-xl text-df-green">대한민국 해병대</p>, <p key={4} className="text-2xl text-df-green">2600</p>, <p key={4} className="text-2xl text-df-green">1500</p>]);
  
  return (
      <div className="grow flex flex-col w-full overflow-y-scroll">
        <ListTable
          tableHead={["랭킹", "군종", "획득 MP", "취득 자격증 수"]}
          tableData={dummyArray} />
      </div>
  );
}

export default RankListANA;