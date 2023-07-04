/*
const tab1 = {name: "전체 자격증", component: <Component1 />}
const tab2 = {name: "병과별 추천", component: <Component2 />}
const tab3 = {name: "분야별 추천", component: <Component3 />}

...

  <ListPage 
    title="국가 기술 자격증 추천"
    tabs={[tab1, tab2, tab3]} />
*/

import { useState } from "react";

interface Tab {
  name: string;
  component: React.ReactNode;
}

interface Props {
  title: string;
  tabs: Tab[];
}

const ListPage = (props: Props) => {
  const [currentTabNumber, setTabNumber] = useState(0);
  const classNameTab = "text-lime-800 font-semibold mr-3 ";
  const classNameSelected = "underline underline-offset-4 decoration-4 ";

  return (
    <div className="flex flex-col w-full mt-16 pr-5 pl-5">
      <h1 className="text-orange-600 text-3xl font-bold drop-shadow-md">{props.title}</h1>
      <div className="flex flex-row w-full mt-2 mb-3">
        {props.tabs.map((tab, index) => <button className={index === currentTabNumber ? classNameSelected + classNameTab : classNameTab} onClick={() => setTabNumber(index)}>{tab.name}</button>)}
      </div>
      {props.tabs[currentTabNumber].component}
    </div>
  );
}

export default ListPage;