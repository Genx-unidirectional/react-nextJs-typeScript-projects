import { sculptureList } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
function TogglerInfo() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const listItem = sculptureList[index];
  const handleNext = () => {
    if (index < sculptureList.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="w-3/4 h-1/2 relative bg-white border border-white  rounded-lg overflow-hidden text-black flex items-start gap-2 flex-col">
      <div className="bg-black opacity-100 w-full h-full">
        <Image
          src={listItem.url}
          alt={listItem.alt}
          width={100}
          height={100}
          className="w-full"
        ></Image>
      </div>
      <div className="p-2 flex items-start flex-col gap-2">
        <h2 className="text-ellipsis font-medium">
          Artist : {listItem.artist}
        </h2>
        <button onClick={handleClick} className="underline">
          Show description
        </button>
        {show ? (
          <p className="transition-all duration-500 origin-top">
            {listItem.description}
          </p>
        ) : null}
      </div>
      <button
        onClick={handleNext}
        className="absolute -right-2 text-white font-medium pr-4 -top-2 bg-black p-2 rounded-lg"
      >
        {" "}
        Next
      </button>
    </div>
  );
}
export default TogglerInfo;
