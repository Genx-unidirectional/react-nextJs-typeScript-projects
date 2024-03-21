"use client";
import { ReactElement } from "react";
import BasicContext from "./basicContext";
import ReducerPlusContext from "./reducerPlusContext";

export default function Page() {
  const ComponentArr: ReactElement[] = [
    <BasicContext />,
    <ReducerPlusContext />,
  ];
  return (
    <div className="min-h-screen  w-full  flex flex-col items-center">
      {ComponentArr.map((component, idx) => {
        return (
          <div
            key={idx}
            className="h-screen relative flex justify-center items-center "
          >
            {component}
            <hr className="w-3/4 bg-white border border-solid border-b-2 border-white  absolute bottom-0 mx-auto" />
          </div>
        );
      })}
    </div>
  );
}
