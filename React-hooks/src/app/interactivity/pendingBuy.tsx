import { useState } from "react";

async function PendingBuy() {
  const [pending, setPending] = useState(0);
  const [complete, setComplete] = useState(0);
  const handleBuy = () => {
    setPending(1);
    delay(3000);
    setPending((prev) => prev - 1);
    setComplete((prev) => prev + 1);
  };
  return (
    <div className="w-3/4 h-[300px] flex flex-col bg-white gap-2 p-2 rounded-lg items-start justify-between">
      <h2 className="text-3xl font-bold text-black">Pending : {pending}</h2>
      <h2 className="text-3xl font-bold text-black">Pending : {complete}</h2>
      <button
        onClick={handleBuy}
        className="bg-black  text-white rounded-lg w-full py-2  font-medium"
      >
        Buy
      </button>
    </div>
  );
}
export default PendingBuy;

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, ms);
  });
}
