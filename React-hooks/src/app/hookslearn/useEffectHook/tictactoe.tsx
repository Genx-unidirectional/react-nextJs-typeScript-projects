"use client";

import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState<(number | undefined)[]>(
    Array<number | undefined>(8)
  );
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2">
      {board.map((resp, idx) => {
        const cellVal = resp !== undefined ? resp : " ";
        return (
          <div
            key={idx}
            className="h-12  rounded-sm w-12 text-3xl flex  justify-center items-center bg-white text-black"
            onClick={handleClick}
          >
            {cellVal}
          </div>
        );
      })}
    </div>
  );
};
export default TicTacToe;
