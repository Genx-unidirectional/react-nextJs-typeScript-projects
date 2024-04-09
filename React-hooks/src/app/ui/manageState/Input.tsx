import { ChangeEvent } from "react";

type InputProps = {
  label: string;
  text: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Input({ label, text, handleChange }: InputProps) {
  return (
    <div className="flex flex-col items-start">
      <label className="text-2xl font-medium " htmlFor="text">
        {label} :
      </label>
      <input
        className="bg-white text-black border border-black rounded-lg text-xl p-1"
        type="text"
        name="text"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}
export default Input;
