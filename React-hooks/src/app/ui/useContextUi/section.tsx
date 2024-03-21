import React, { ReactHTMLElement, ReactNode, useContext } from "react";
import { LevelContext } from "@/app/hookslearn/useContext/levelContext";
import clsx from "clsx";
const Section = ({ children }: { children: ReactNode }) => {
  const level = useContext(LevelContext);
  return (
    <section
      className={clsx("border border-solid border-black text-black", {
        "bg-blue-400 ": level == 1,
        "bg-blue-500 ": level == 2,
        "bg-blue-500": level == 3,
        "bg-blue-600": level == 4,
        "bg-blue-700": level == 5,
      })}
    >
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
};
export default Section;
