"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
export default function BasicUseEffect() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [triggered, setTriggered] = useState<boolean>(false);
  useEffect(() => {
    setTriggered(!triggered);
  }, [count1, count2]);
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="bg-slate-800 rounded-xl p-4 flex flex-col w-1/2 gap-2">
        <div className="flex gap-4 bg-slate-700 rounded-xl justify-between items-center  p-4">
          <button
            className="bg-white rounded-xl text-black p-4 font-bold"
            onClick={() => {
              setCount1((prev) => prev + 1);
            }}
          >
            Count 1
          </button>
          <p className="text-2xl  font-bold">{count1}</p>
        </div>
        <div className="flex gap-4 bg-slate-700 rounded-xl justify-between items-center  p-4">
          <button
            className="bg-white border  rounded-xl text-black p-4 font-bold"
            onClick={() => {
              setCount2((prev) => prev + 1);
            }}
          >
            Count 2
          </button>
          <p className="text-2xl font-bold">{count2}</p>
        </div>
        <p className="text-xl text-white font-medium p-2">
          Above code has useEffect set based on both count ,if either of count
          changes useEffect runs showed by following color box
        </p>
      </div>
      <div>
        <button
          className={clsx(
            "h-[50px] w-[200px] border-4 text-2xl font-medium    border-solid border-orange-500   rounded-xl",
            {
              "bg-white text-black": triggered == true,
              "bg-red-700  text-white": triggered != true,
            }
          )}
        >
          Effect triggered
        </button>
      </div>
    </div>
  );
}
