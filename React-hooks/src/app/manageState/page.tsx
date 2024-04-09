"use client";
import Accordion from "./accordion";

function Page() {
  const componentArr = [
    {
      id: 1,
      component: <Accordion />,
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
