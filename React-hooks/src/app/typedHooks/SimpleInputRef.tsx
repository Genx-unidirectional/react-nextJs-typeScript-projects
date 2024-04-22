import { forwardRef, useEffect, useRef } from "react";

export default function SimpleRef() {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);
  return <MyInput ref={ref} />;
}

const MyInput = forwardRef<HTMLInputElement, {}>((props, ref) => {
  return (
    <input
      className="bg-black p-2 rounded-lg text-white"
      type="text"
      ref={ref}
    />
  );
});
