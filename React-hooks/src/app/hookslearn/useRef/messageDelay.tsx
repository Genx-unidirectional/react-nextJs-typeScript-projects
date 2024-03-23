import { useRef, useState } from "react";

const MessageDelay = () => {
  const [sendMsg, setSendMsg] = useState(false);
  const [text, setText] = useState("");
  const timeOutId = useRef<null | NodeJS.Timeout>(null);
  const handleSend = () => {
    setSendMsg(true);
    timeOutId.current = setTimeout(() => {
      alert(`You send${text}`);
      setSendMsg(false);
    }, 4000);
  };
  const handleUndo = () => {
    if (timeOutId.current) {
      clearTimeout(timeOutId.current);
      setSendMsg(false);
    }
  };
  return (
    <div className="w-3/4 h-1/4 bg-white p-2 gap-2 flex flex-col items-center rounded-lg">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-white w-full border-solid border-blue-500 border-2 p-1 rounded-lg text-xl text-black"
      />
      {sendMsg ? (
        <button
          onClick={handleUndo}
          className="w-full py-1 animate-loading-Blur rounded-lg bg-blue-600 text-xl font-medium"
        >
          Undo
        </button>
      ) : (
        <button
          onClick={handleSend}
          className="w-full py-1  rounded-lg bg-blue-600 text-xl font-medium"
        >
          Send
        </button>
      )}
    </div>
  );
};
export default MessageDelay;
