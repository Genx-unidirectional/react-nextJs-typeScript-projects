import { ReactElement } from "react";
import BasicUseEffect from "./basicsUseEffect";
import TicTacToe from "./tictactoe";

export default function Page() {
  const componentArr: ReactElement[] = [<BasicUseEffect />, <TicTacToe />];
  return (
    <>
      {componentArr.map((component) => {
        return (
          <div className="flex flex-col relative w-full h-screen justify-center items-center">
            {component}
            <hr className="w-full h-[2px] absolute bottom-0 dark:bg-white bg-black mx-auto sm:w-1/2" />
          </div>
        );
      })}
    </>
  );
}
