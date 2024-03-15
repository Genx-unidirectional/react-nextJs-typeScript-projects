"use client";
import ImageLoad from "./imageLoad";
import ChatApp from "./chatApp";
import ContactManager from "./contactWithEdit";

const Page = () => {
  const componentArr = [<ChatApp />, <ContactManager />, <ImageLoad />];
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
