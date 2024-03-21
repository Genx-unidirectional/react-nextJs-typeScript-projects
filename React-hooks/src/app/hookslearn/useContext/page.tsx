"use client";
import { ReactElement } from "react";
import BasicContext from "./basicContext";

export default function Page() {
  const ComponentArr: ReactElement[] = [<BasicContext />];
  return (
    <div className="min-h-screen relative w-full flex flex-col items-center">
      {ComponentArr.map((component, idx) => {
        return (
          <div className="h-screen flex justify-center items-center ">
            {component}
            <hr className="w-full sm:w-1/2 absolute bottom-0 mx-auto" />
          </div>
        );
      })}
    </div>
  );
}
