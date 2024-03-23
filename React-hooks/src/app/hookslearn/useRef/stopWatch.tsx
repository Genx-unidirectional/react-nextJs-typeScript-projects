import Node from "postcss/lib/node";
import { useRef, useState } from "react";

const StopWatch = () => {
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const intervalRef = useRef<null | NodeJS.Timeout>(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };
  const handleStop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  };

  let secondStarted = (now - startTime) / 1000;
  return (
    <div className="h-2/4 w-2/4 flex flex-col gap-4 items-center  bg-indigo-700 rounded-lg">
      <h1 className="text-4xl font-bold h-1/2 flex justify-center items-center">
        {secondStarted.toFixed(2)}
      </h1>
      <button
        onClick={handleStart}
        className="bg-white px-2 py-1 rounded-lg text-2xl font-medium text-black"
      >
        Start
      </button>
      <button
        onClick={handleStop}
        className="bg-white px-2 py-1 rounded-lg text-2xl font-medium text-black"
      >
        Stop
      </button>
    </div>
  );
};
export default StopWatch;
