import { useRef, useEffect, useImperativeHandle, forwardRef } from "react";

export default function App() {
  const cntEl: any = useRef(null); // I don't know what type should be here.
  useEffect(() => {
    if (cntEl.current) {
      cntEl.current.start();
    }
  }, []);
  return <Countdown ref={cntEl} />;
}

const Countdown = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    start() {
      alert("start");
    },
  }));
  return <div>Countdown</div>;
});
