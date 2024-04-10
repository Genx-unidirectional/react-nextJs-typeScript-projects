"use client";

import { Component } from "lucide-react";
import StopWatch from "./stopWatch";
import MsgUndo from "./msgUndo";

function Page() {
  const componentArr = [
    {
      id: 1,
      component: <StopWatch />,
    },
    {
      id: 2,
      component: <MsgUndo />,
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
