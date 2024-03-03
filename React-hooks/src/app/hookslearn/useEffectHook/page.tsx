import { ReactElement } from "react";
import BasicUseEffect from "./basicsUseEffect";
import TicTacToe from "./tictactoe";

export default function Page() {
  const componentArr: ReactElement[] = [<BasicUseEffect />, <TicTacToe />];
  return (
    <>
      {componentArr.map((component) => {
        return (
          <div className="flex w-full h-screen justify-center items-center">
            {component}
          </div>
        );
      })}
    </>
  );
}
