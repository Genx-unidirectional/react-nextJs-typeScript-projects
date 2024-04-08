"use client";

import FirstComponent from "./firstComponent";

const componentArr: { id: number; item: React.ReactElement }[] = [
  { id: 1, item: <FirstComponent /> },
];
function page() {
  return (
    <main className="h-full  w-full p-2">
      {componentArr.map((component) => (
        <div
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
