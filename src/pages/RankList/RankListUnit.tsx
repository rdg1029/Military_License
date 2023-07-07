import ListTable from "../ListTable";

const RankListUnit = () => {
  const dummyArray: React.ReactNode[][] = [];
  dummyArray.push([<p key={1} className="text-2xl text-yellow-500">1</p>, <p key={1} className="text-xl text-df-green">제8기동사단</p>, <p key={1} className="text-2xl text-df-green">1200</p>, <p key={1} className="text-2xl text-df-green">200</p>]);
  dummyArray.push([<p key={2} className="text-2xl text-blue-900">2</p>, <p key={2} className="text-xl text-df-green">방공관제사령부</p>, <p key={2} className="text-2xl text-df-green">1000</p>, <p key={2} className="text-2xl text-df-green">180</p>]);
  dummyArray.push([<p key={3} className="text-2xl text-orange-900">3</p>, <p key={3} className="text-xl text-df-green">제22보병사단</p>, <p key={3} className="text-2xl text-df-green">800</p>, <p key={3} className="text-2xl text-df-green">160</p>]);
  dummyArray.push([<p key={4} className="text-2xl text-df-green">4</p>, <p key={4} className="text-xl text-df-green">제11기동사단</p>, <p key={4} className="text-2xl text-df-green">600</p>, <p key={4} className="text-2xl text-df-green">140</p>]);
  dummyArray.push([<p key={5} className="text-2xl text-df-green">5</p>, <p key={5} className="text-xl text-df-green">육군사관학교</p>, <p key={5} className="text-2xl text-df-green">400</p>, <p key={5} className="text-2xl text-df-green">120</p>]);
  
  return (
      <div className="grow flex flex-col w-full overflow-y-scroll">
        <ListTable
          tableHead={["랭킹", "부대명", "획득 MP", "취득 자격증 수"]}
          tableData={dummyArray} />
      </div>
  );
}

export default RankListUnit;