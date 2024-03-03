"use client";

import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState<(undefined | string)[]>(
    Array.from({ length: 9 })
  );
  const [win, setWin] = useState<boolean>(false);
  const [history, setHistory] = useState<string>("X");
  const [checkCount, setCheckCount] = useState<number>(0);
  function setContent(num: number): void {
    if (history == "X") {
      setHistory("O");
      let newBoard = board.map((item, idx) => {
        if (idx === num) {
          return "O";
        } else {
          return item;
        }
      });
      setBoard(newBoard);
    } else {
      setHistory("X");
      let newBoard = board.map((item, idx) => {
        if (idx === num) {
          return "X";
        } else {
          return item;
        }
      });
      setBoard(newBoard);
    }
  }
  function setDefault() {
    setBoard(Array.from({ length: 9 }));
    setWin(false);
    setHistory("X");
    setCheckCount(0);
  }
  function winCheck(values: typeof board): void {
    const winArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 7],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    for (let i = 0; i < winArr.length; i++) {
      let [a, b, c] = winArr[i];
      if (values[a] && values[a] == values[b] && values[b] == values[c]) {
        setWin(true);
        return;
      }
    }
  }
  const handleClick = (idx: number) => {
    if (!win) {
      setContent(idx);
      setCheckCount((prev) => prev + 1);
      winCheck(board);
    } else {
      return;
    }
  };
  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-4xl text-indigo-500 font-bold">TIc Tac Toe Game</h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        {board.map((resp, idx) => {
          return (
            <div
              key={idx}
              className="h-12  rounded-sm w-12 text-3xl flex  justify-center items-center bg-white text-black"
              onClick={() => handleClick(idx)}
            >
              {resp}
            </div>
          );
        })}
      </div>

      <button
        className="py-2 px-4 dark:text-black rounded-xl text-2xl font-bold dark:bg-white bg-black text-white"
        onClick={() => {
          setDefault();
        }}
      >
        Reset
      </button>
      <p className="text3xl font-medium">
        {win ? "You won" : checkCount === board.length ? "Draw" : ""}
      </p>
    </div>
  );
};
export default TicTacToe;
