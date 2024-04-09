"use client";
import Accordion from "./accordion";
import FilterComponent from "./filterComponent";
import SameInput from "./sameInput";
import StatePreserve from "./statePreserve";

function Page() {
  const componentArr = [
    {
      id: 1,
      component: <Accordion />,
    },
    {
      id: 2,
      component: <SameInput />,
    },
    {
      id: 3,
      component: <FilterComponent />,
    },
    {
      id: 4,
      component: <StatePreserve />,
    },
  ];
  return (
    <div className="w-full h-full overflow-hidden overflow-y-scroll">
      {componentArr.map((item) => (
        <div
          id={item.id.toString()}
          className="h-full w-full p-2 flex justify-center items-center"
          key={item.id}
        >
          {item.component}
        </div>
      ))}
    </div>
  );
}
export default Page;
