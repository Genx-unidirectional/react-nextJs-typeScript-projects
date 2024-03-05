"use client";

import {
  BoardProps,
  Squares,
} from "@/app/lib/hookslearn/useEffect/refinedTicTac";
import { link } from "fs";
import { useState } from "react";

const RefinedTicTacToe = () => {
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [isXNext, setXNext] = useState<boolean>(true);

  let currentSquare = history[history.length - 1];

  function onPlay(squares: Squares) {
    setHistory([...history, squares]);
    setXNext(!isXNext);
  }
  function jumpTo(move: number) {
    setHistory([...history.slice(0, move == 0 ? 1 : move + 1)]);
    setCurrentMove(move);
  }
  const winner = calculateWinner(currentSquare);
  let status;
  if (winner) {
    status = "Winner is :" + winner;
  } else {
    status = "Next move : " + (isXNext ? "X" : "O");
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button
          className=" dark:bg-white bg-black mt-2 rounded-sm dark:text-black text-white p-[2px] "
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });
  return (
    <div className="h-[200px] w-[400px] flex justify-evenly items-center ">
      <div className="col-start-1 col-end-2 ">
        <h2>{status}</h2>
        <Board squares={currentSquare} isXNext={isXNext} onPlay={onPlay} />
      </div>
      <div className=" overflow-hidden h-full w-auto overflow-y-scroll bg-slate-700 p-6 rounded-xl shadow-inner shadow-white">
        <ul className="">{moves}</ul>
      </div>
    </div>
  );
};
export default RefinedTicTacToe;

function Board({ isXNext, squares, onPlay }: BoardProps) {
  const handleClick = (num: number) => {
    //Below to not able to click again  again on the same square which have content init
    if (squares[num] || calculateWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();

    if (isXNext) {
      newSquares[num] = "X";
    } else {
      newSquares[num] = "O";
    }
    onPlay(newSquares);
  };
  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-1  ">
      {squares.map((square, index) => {
        return (
          <div
            key={index}
            className="bg-white w-12 h-12 rounded-md grid place-items-center  text-black font-bold text-3xl"
            onClick={() => {
              handleClick(index);
            }}
          >
            {square}
          </div>
        );
      })}
    </div>
  );
}

// Creating function for winner check
function calculateWinner(squares: (string | null)[]): string | undefined {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i];
    if (squares[a] && squares[a] == squares[b] && squares[b] == squares[c]) {
      return squares[a]!;
    }
  }
}
