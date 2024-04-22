import { useRef, useEffect, useImperativeHandle, forwardRef } from "react";

export const Countdown = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    start() {
      alert("start");
    },
  }));
  return <div>My parent control me</div>;
});

type Props = {};
export type MyInputMethods = {
  focus: () => void;
  scrollIntoView: () => void;
};

//Let's limit upcoming ref

export const MyInput = forwardRef<MyInputMethods, Props>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current?.focus();
      },
      scrollIntoView() {
        inputRef.current?.scrollIntoView();
      },
    };
  });
  return (
    <input
      className="bg-white text-black p-1 rounded-lg w-1/2"
      type="text"
      ref={inputRef}
    />
  );
});
