import { ChangeEvent, useRef, useState } from "react";

const LatestMsgInput = () => {
  const [text, setText] = useState("");
  const refText = useRef("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    refText.current = e.target.value;
  };
  const handleClick = () => {
    setTimeout(() => {
      alert(`${refText.current}`);
    }, 4000);
  };
  return (
    <div className="w-3/4 h-1/4 bg-white  flex flex-col items-center justify-evenly rounded-lg p-3">
      <input
        className="p-1 w-full bg-white text-black rounded-lg border-2 border-solid border-green-500 text-2xl "
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button
        className="w-full py-2 rounded-lg bg-green-500 text-white font-bold text-2xl"
        onClick={handleClick}
      >
        Send
      </button>
    </div>
  );
};
export default LatestMsgInput;
