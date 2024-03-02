"use client";
import { useState } from "react";
import MoreOnUseState from "./usingdevtools";

export default function Page() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <p className="text-4xl"> {count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
        className="bg-white text-black p-2 rounded-xl"
      >
        Increase
      </button>
      <MoreOnUseState />
    </div>
  );
}
