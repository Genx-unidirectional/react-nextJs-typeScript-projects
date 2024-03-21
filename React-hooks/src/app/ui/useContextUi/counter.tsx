import { useCounter } from "./contextWithReducer";

const Counter = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div className="flex justify-between w-full items-center rounded-xl p-2 bg-white ">
      <h2 className="text-black font-bold text-3xl">Count : {count}</h2>
      <div className="flex gap-1">
        <button
          className="w-8 h-8 bg-black text-5xl  flex justify-center items-center border-none text-white"
          onClick={increment}
        >
          +
        </button>
        <button
          className="w-8 h-8 text-5xl bg-black flex justify-center items-center text-white"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
};
export default Counter;
