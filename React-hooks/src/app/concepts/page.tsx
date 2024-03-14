"use client";
import TestTwo from "./testTwo";
import TestThree from "./testThree";
import ChatApp from "./chatApp";

const Page = () => {
  const componentArr = [<ChatApp />];
  return (
    <div className="min-h-screen">
      {componentArr.map((component, idx) => {
        return (
          <div key={idx} className="h-screen flex justify-center items-center">
            {component}
          </div>
        );
      })}
    </div>
  );
};
export default Page;
