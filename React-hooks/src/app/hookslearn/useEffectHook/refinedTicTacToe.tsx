"use client";

import { useState } from "react";

type BoardProps = {
  squares: (string | null)[];
  handleClick: (i: number) => void;
};
type BlockProps = {};

const RefinedTicTacToe = () => {
  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null)
  );
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  function jumpTo() {
    currentSquare = history[currentMove];
  }
  function handleClick(i: number): void {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();
    if (isXNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    setSquares(newSquares);
    setIsXNext(!isXNext);
    const newHistory = [...history, newSquares];
    setHistory(newHistory);
  }
  let currentSquare = history[history.length - 1];
  let status;
  const winner: string | null | undefined = calculateWinner(currentSquare);
  if (winner) {
    status = "Winner :" + winner;
  } else {
    status = "Next is :" + (isXNext ? "X" : "O");
  }
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-2">
      <div className="text-3xl font-medium flex justify-center items-center flex-col gap-4">
        {status}
        <Board squares={currentSquare} handleClick={handleClick} />
      </div>
      <div className="flex justify-center items-center">
        <ol className="flex flex-col justify-center items-center gap-1">
          {history.map((squares, idx) => {
            return (
              <li
                className="cursor-pointer p-[1px] bg-white text-black rounded-sm"
                onClick={() => {
                  jumpTo();
                }}
              >
                Jump to {idx + 1}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
export default RefinedTicTacToe;

function Board({ squares, handleClick }: BoardProps) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2">
      {squares.map((square, idx) => {
        return (
          <button
            className="w-12 h-12 bg-white text-black rounded-sm"
            onClick={() => handleClick(idx)}
          >
            {square}
          </button>
        );
      })}
    </div>
  );
}

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 3, 7],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] == squares[b] && squares[b] == squares[c]) {
      return squares[a];
    }
  }
}
