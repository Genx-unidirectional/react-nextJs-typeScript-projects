"use client";

import BasicForm from "./basicForm";
import SnapShot from "./snapShot";
import TogglerInfo from "./togglerInfo";

const componentArr: { id: number; item: React.ReactElement }[] = [
  {
    id: 1,
    item: <BasicForm />,
  },
  {
    id: 2,
    item: <TogglerInfo />,
  },
  {
    id: 3,
    item: <SnapShot />,
  },
];
function page() {
  return (
    <main className="h-full  w-full p-2">
      {componentArr.map((component) => (
        <div
          id={component.id.toString()}
          className=" min-h-full w-full flex items-center justify-center"
          key={component.id}
        >
          {component.item}
        </div>
      ))}
    </main>
  );
}
export default page;
