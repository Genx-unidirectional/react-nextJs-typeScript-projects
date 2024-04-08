"use client";

import FirstComponent from "./firstComponent";
import PureJsx from "./pureJsx";

const componentArr: { id: number; item: React.ReactElement }[] = [
  { id: 1, item: <FirstComponent /> },
  { id: 2, item: <PureJsx /> },
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
