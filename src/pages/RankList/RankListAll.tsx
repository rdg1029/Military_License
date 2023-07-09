import { RANK_USER_DATA } from "@/utils/DataClass";
import ListTable from "../ListTable";

interface Props {
  list: Array<RANK_USER_DATA>;
}

const RankListAll = (props: Props) => {
  return (
      <div className="grow flex flex-col w-full overflow-y-scroll">
        <ListTable
          tableHead={["순위", "이름", "획득 MP"]}
          tableData={props.list.map((item, i) => [
            <p key={i}>{i + 1}</p>, <p key={i} className="text-2xl text-df-green">{item.name}</p>, <p key={i} className="text-2xl text-df-green">{item.mp}</p>
          ])} />
      </div>
  );
}

export default RankListAll;