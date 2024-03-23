"use client";
import { ReactElement } from "react";
import StopWatch from "./stopWatch";
import MessageDelay from "./messageDelay";

const Page = () => {
  const componentArr: ReactElement[] = [<StopWatch />, <MessageDelay />];
  return (
    <div className="min-h-screen w-full">
      {componentArr.map((component, idx) => {
        return (
          <div
            key={idx}
            className="h-screen  flex justify-center items-center relative"
          >
            {component}
            <hr className="mx-auto w-4/5 absolute bottom-0 border border-solid border-white" />
          </div>
        );
      })}
    </div>
  );
};
export default Page;
