import { ChangeEvent, useState } from "react";
import Input from "../ui/manageState/Input";

function SameInput() {
  const [text, setText] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div className="w-full h-1/2 flex items-start flex-col p-3 rounded-lg">
      <Input label="Name" text={text} handleChange={handleChange} />
      <Input label="Name" text={text} handleChange={handleChange} />
    </div>
  );
}
export default SameInput;
