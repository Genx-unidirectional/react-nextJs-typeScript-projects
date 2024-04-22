import { useEffect, useRef } from "react";
import { CountHandle } from "./FocusInput";
import { Countdown, MyInput, MyInputMethods } from "./ForwardRef";
function RefWithType() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<CountHandle>();
  const ref3 = useRef<MyInputMethods>(null);
  ref1.current;
  ref2.current;

  const handleRef2 = () => {
    //the children decide what the start function is when component commits and curren gets its value
    if (ref2.current) {
      ref2.current.start();
    }
  };
  const handleClick = () => {
    if (ref3.current) {
      ref3.current.focus();
    }
  };
  return (
    <div className="w-1/2 h-1/2 overflow-hidden border border-black rounded-lg">
      <div
        className="p-2  bg-pink-300 flex justify-center items-center"
        ref={ref1}
      >
        one
      </div>
      <div className="p-2  bg-pink-500 flex justify-center items-center">
        <Countdown ref={ref2} />
        <button
          onClick={handleRef2}
          className="bg-black text-sm p-[1px] text-white rounded-lg ml-1"
        >
          Run
        </button>
      </div>
      <div className="p-2  bg-pink-700 flex flex-col gap-2 justify-center items-center">
        <button
          onClick={handleClick}
          className="bg-white text-black font-bold p-[1px] rounded-sm"
        >
          Focus
        </button>
        <MyInput ref={ref3} />
      </div>
    </div>
  );
}
export default RefWithType;
