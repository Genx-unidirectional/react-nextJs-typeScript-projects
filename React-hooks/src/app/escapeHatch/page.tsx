"use client";

import { Component } from "lucide-react";
import StopWatch from "./stopWatch";
import MsgUndo from "./msgUndo";
import Dashboard from "./debounce";
import CatFriends from "./scroller";
import CatFriends2 from "./scrollHorizon";

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
    {
      id: 3,
      component: <Dashboard />,
    },
    {
      id: 4,
      component: <CatFriends />,
    },
    {
      id: 5,
      component: <CatFriends2 />,
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
