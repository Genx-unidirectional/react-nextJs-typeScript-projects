import { useRef, useState } from "react";

function StopWatch() {
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const timeOutId = useRef<NodeJS.Timeout>();
  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    timeOutId.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };
  const handleStop = () => {
    clearInterval(timeOutId.current);
    setStartTime(0);
    setNow(0);
  };
  let time = 0;
  if (startTime > 0) {
    time = (now - startTime) / 1000;
  }
  return (
    <div className="w-[95%] text-black sm:w-1/2 h-1/2 bg-white rounded-lg flex flex-col gap-2 p-2">
      <h2 className="flex-grow text-center justify-center flex items-center font-medium text-5xl tracking-widest">
        {time}
      </h2>
      {startTime > 0 ? (
        <button
          onClick={handleStop}
          className="bg-black p-2 text-xl text-white font-medium rounded-lg w-full"
        >
          Stop
        </button>
      ) : (
        <button
          onClick={handleStart}
          className="bg-black p-2 text-xl text-white font-medium rounded-lg w-full"
        >
          Start
        </button>
      )}
    </div>
  );
}
export default StopWatch;
