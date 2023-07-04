import ListPage from "../ListPage";
import ListAll from "./LicenseListAll";
import ListByClass from "./LicenseListByClass";
import ListByType from "./LicenseListByType";
import ListInOrder from "./LicenseListInOrder";

const LicenseList = () => {
  return (
    <ListPage
      title="국가 기술 자격증 추천"
      tabs={[
        {name: "전체 자격증", component: <ListAll />},
        {name: "병과별 추천", component: <ListByClass />},
        {name: "분야별 추천", component: <ListByType />},
        {name: "전체 취득순", component: <ListInOrder />},
      ]} />
  );
}

export default LicenseList;