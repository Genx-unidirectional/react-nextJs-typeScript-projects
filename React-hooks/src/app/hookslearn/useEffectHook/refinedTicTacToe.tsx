"use client";

import {
  BoardProps,
  Squares,
} from "@/app/lib/hookslearn/useEffect/refinedTicTac";
import { useState } from "react";

const RefinedTicTacToe = () => {
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const [isXNext, setXNext] = useState<boolean>(true);

  const currentSquare = history[history.length - 1];

  function onPlay(squares: Squares) {
    setHistory([...history, squares]);
    setXNext(!isXNext);
  }
  return (
    <div>
      <Board squares={currentSquare} isXNext={isXNext} onPlay={onPlay} />
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
