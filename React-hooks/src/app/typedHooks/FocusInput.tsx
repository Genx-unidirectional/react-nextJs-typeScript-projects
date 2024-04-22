// mentality while using the useRef the useRef is a hook which can be used for escape hatch when component mounts the ref.current object is undefined but when Component commit itself then the ref.current get the value which we assign to it

import { forwardRef, useImperativeHandle } from "react";

// We can use forwardRef to expose dom nodes of one component to it's parent

// we can use useImperative handle to limit the what functionality exposed to the parent component by child whose dom nodes are exposed

type CountHandle = {
  start: () => void;
};

type Props = {};

const CountDown = forwardRef<CountHandle, Props>((props, ref) => {
  useImperativeHandle(ref, () => ({
    start() {
      alert("Count down");
    },
  }));
  return <div>Here is a countdown</div>;
});
