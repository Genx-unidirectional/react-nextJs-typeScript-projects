import { forwardRef, useRef } from "react";
import { RefObject } from "react";
const ForwardRefWithRef = () => {
  const refContainer = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    refContainer.current?.focus();
  };
  return (
    <div className="w-4/5 h-2/5 bg-white flex items-center flex-col justify-evenly rounded-lg">
      <Input ref={refContainer} />
      <button
        onClick={handleClick}
        className="rounded-lg bg-black p-1 font-medium text-2xl"
      >
        SetFocus
      </button>
    </div>
  );
};
export default ForwardRefWithRef;

const Input = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <input
      type="text"
      className="bg-white border-2 border-solid border-black text-black p-1 font-medium text-2xl rounded-lg"
      ref={ref}
    />
  );
});
