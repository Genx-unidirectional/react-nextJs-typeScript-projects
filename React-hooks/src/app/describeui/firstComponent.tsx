import { useState } from "react";
import ColorComponent from "../ui/describeui/color";
function FirstComponent() {
  const [state, setState] = useState<number | null>(null); // here we can make the assertion like state as number
  return (
    <div className="p-2 w-3/4 h-1/2 bg-white rounded-lg gap-8 flex flex-col items-center">
      <div className="w-full flex flex-col gap-1 ">
        <ColorComponent id={1} state={state as number} />
        <ColorComponent id={2} state={state as number} />
        <ColorComponent id={3} state={state as number} />
      </div>
      <div className="flex items-center w-full justify-evenly">
        <button
          className="bg-black py-4 px-6 text-white font-bold text-2xl rounded-lg"
          onClick={() => setState(1)}
        >
          1
        </button>
        <button
          className="bg-black py-4 px-6 text-white font-bold text-2xl rounded-lg"
          onClick={() => setState(2)}
        >
          2
        </button>
        <button
          className="bg-black py-4 px-6 text-white font-bold text-2xl rounded-lg"
          onClick={() => setState(3)}
        >
          3
        </button>
      </div>
    </div>
  );
}
export default FirstComponent;
