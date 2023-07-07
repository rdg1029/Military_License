import ListTable from "../ListTable";

const RankListAll = () => {
  const dummyArray: React.ReactNode[][] = [];
  dummyArray.push([<p key={1} className="text-2xl text-yellow-500">1</p>, <p key={1} className="text-2xl text-df-green">병장</p>, <p key={1} className="text-2xl text-df-green">정승민</p>, <p key={1} className="text-2xl text-df-green">200</p>, <p key={1} className="text-2xl text-df-green">14</p>]);
  dummyArray.push([<p key={2} className="text-2xl text-blue-900">2</p>, <p key={2} className="text-2xl text-df-green">병장</p>, <p key={2} className="text-2xl text-df-green">정승민</p>, <p key={2} className="text-2xl text-df-green">180</p>, <p key={2} className="text-2xl text-df-green">13</p>]);
  dummyArray.push([<p key={3} className="text-2xl text-orange-900">3</p>, <p key={3} className="text-2xl text-df-green">병장</p>, <p key={3} className="text-2xl text-df-green">정승민</p>, <p key={3} className="text-2xl text-df-green">170</p>, <p key={3} className="text-2xl text-df-green">12</p>]);
  
  for (let i = 4; i <= 10; i++) {
    dummyArray.push([<p key={i} className="text-2xl text-df-green">{i}</p>, <p key={i} className="text-2xl text-df-green">병장</p>, <p key={i} className="text-2xl text-df-green">정승민</p>, <p key={i} className="text-2xl text-df-green">{170 - (i * 2)}</p>, <p key={i} className="text-2xl text-df-green">{11 - (i - 4)}</p>]);
  }

  return (
      <div className="grow flex flex-col w-full overflow-y-scroll">
        <ListTable
          tableHead={["랭킹", "계급", "이름", "획득 MP", "취득 자격증 수"]}
          tableData={dummyArray} />
      </div>
  );
}

export default RankListAll;