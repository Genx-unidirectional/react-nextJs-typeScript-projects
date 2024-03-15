"use client";
import { ReactElement, useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import clsx from "clsx";
type ChildProps = {
  children: ReactElement;
};

const Layout = ({ children }: ChildProps) => {
  const [isHidden, setHidden] = useState(false);
  // useEffect(() => {
  //   if (window.innerWidth < 768) {
  //     setHidden(true);
  //   }
  // }, [window.innerWidth]);
  return (
    <div className="grid grid-cols-7 ">
      {/* <Bars3Icon
        className="w-10 h-full fixed top-[-46.45%] right-0 z-10 "
        onClick={() => setHidden(!isHidden)} 
      /> */}
      <div
        className={clsx("p-2 col-span-7", {
          "col-span-7": isHidden,
          "bg-red-black ": !isHidden,
        })}
      >
        {children}
      </div>
      {/* <div
        className={clsx("md:col-span-2 ", {
          "w-full absolute top-12 flex flex-col items-center text-xl py-4 gap-4 left-0 h-full bg-black transition-all duration-500 origin-top-left":
            isHidden == false,
          "w-0": isHidden == true,
        })} 
        onClick={() => setHidden(!isHidden)}
      >
        <a href="#one">TestOne</a>
        <a href="#two">TestTwo</a>
        <a href="#three">TestThree</a>
      </div> */}
    </div>
  );
};
export default Layout;

// export default function Layout() {
//   return <div>hey</div>;
// }
