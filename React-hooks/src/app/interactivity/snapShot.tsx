import { useState } from "react";

function SnapShot() {
  const [name, setName] = useState<string>("Alice");
  const [msg, setMsg] = useState("hello");
  const handleSubmit = () => {
    setTimeout(() => {
      alert(`${msg} send to ${name}`);
    }, 5000);
  };
  return (
    <div className="w-3/4 h-1/2 bg-white rounded-lg p-4 text-black">
      <select
        className="bg-white border border-black rounded-lg "
        name=""
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
        <option value="Alice">Alice</option>
        <option value="Pete">Pete</option>
      </select>
      <textarea
        className="bg-white w-full rounded-lg border border-black"
        name=""
        id=""
        cols={30}
        rows={10}
        onChange={(e) => setMsg(e.target.value)}
      >
        {msg}
      </textarea>
      <button
        onClick={handleSubmit}
        className="bg-black rounded-lg p-2 text-white"
      >
        Send Message
      </button>
    </div>
  );
}
export default SnapShot;
