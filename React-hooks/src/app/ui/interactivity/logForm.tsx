import { cn } from "@/lib/utils";
import { FormEvent } from "react";

type PropsType = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  className: string;
};
function LogForm({ handleSubmit, className }: PropsType) {
  return (
    <form
      className={cn(
        "w-full h-full flex items-start text-black flex-col",
        className
      )}
      onSubmit={handleSubmit}
    >
      <label className="text-2xl font-medium" htmlFor="name">
        Name :
      </label>
      <input
        type="text"
        id="name"
        className="bg-white border border-black p-1 text-xl rounded-lg w-full"
      />
      <label className="text-2xl font-medium" htmlFor="email">
        Email :
      </label>
      <input
        type="text"
        id="email"
        className="bg-white border border-black p-1 text-xl rounded-lg w-full"
      />
      <button className="w-full bg-black p-2 rounded-lg text-white">
        Submit
      </button>
    </form>
  );
}
export default LogForm;
