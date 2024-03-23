"use client";
import { ReactElement } from "react";
import StopWatch from "./stopWatch";

const Page = () => {
  const componentArr: ReactElement[] = [<StopWatch />];
  return (
    <div className="min-h-screen w-full">
      {componentArr.map((component) => {
        return (
          <div className="h-screen  flex justify-center items-center relative">
            {component}
            <hr className="mx-auto w-4/5 absolute bottom-0 border border-solid border-white" />
          </div>
        );
      })}
    </div>
  );
};
export default Page;
