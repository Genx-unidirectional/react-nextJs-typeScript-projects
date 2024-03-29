import { useState } from "react";
import { createTodo } from "./todos";

export default function TodoMaker() {
  const [text, setText] = useState<string>("");
  const handleSubmit = () => {
    if (text.length < 2) return;
    createTodo(text);
    setText("");
  };
  return (
    <div className="w-full flex justify-center items-center gap-2">
      <input
        type="text"
        name="todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-1 bg-white text-black  rounded-lg flex-grow"
        placeholder="write todo eg mini-goals"
      />
      <button className="font-bold text-2xl">submit</button>
    </div>
  );
}
