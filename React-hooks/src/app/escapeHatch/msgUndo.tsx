import { useRef, useState } from "react";
import { Loader } from "lucide-react";
function MsgUndo() {
  const [send, setSend] = useState(false);
  const refContainer = useRef<HTMLInputElement>(null);
  const [loader, setLoader] = useState(false);
  const timOutId = useRef<NodeJS.Timeout>();
  const handleSend = () => {
    setSend(true);
    setLoader(true);
    timOutId.current = setTimeout(() => {
      setLoader(false);
      setSend(false);
      alert(`${refContainer.current?.value} send to server`);
      if (refContainer.current) {
        refContainer.current.value = "";
      }
    }, 3000);
  };
  const handleUndo = () => {
    clearTimeout(timOutId.current);
    setSend(false);
    setLoader(false);
  };

  return (
    <div className=" w-[95%] sm:w-1/2 relative bg-white p-2 flex flex-col items-center gap-2 rounded-lg">
      {loader && (
        <Loader className="absolute w-8 h-8 text-white animate-spin -top-12" />
      )}
      <input
        className="w-full p-1 text-black bg-white rounded-lg  border border-black"
        type="text"
        name="text"
        ref={refContainer}
      />
      <button
        onClick={handleSend}
        className="w-full py-2 bg-black text-xl text-center font-medium rounded-lg"
      >
        Send
      </button>
      {send && (
        <button
          onClick={handleUndo}
          className="w-full py-2 bg-black text-xl text-center font-medium rounded-lg"
        >
          Undo
        </button>
      )}
    </div>
  );
}
export default MsgUndo;
