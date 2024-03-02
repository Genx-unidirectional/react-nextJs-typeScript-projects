"use client";

import { useState } from "react";

const BasicUseState = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="bg-slate-700 gap-3 mt-12 rounded-xl p-6 flex flex-col items-center">
      <p className="text-4xl"> {count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
        className="bg-white text-black p-2 rounded-xl"
      >
        Increase
      </button>
    </div>
  );
};
export default BasicUseState;
