import clsx from "clsx";
import { useState } from "react";
const ImageLoad = () => {
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleClick = () => {
    if (count < images.length - 1) {
      setCount((prev) => prev + 1);
    } else {
      setCount(0);
    }
    setIsLoading(true);
  };
  const image = images[count];
  return (
    <div className="w-[400px] h-[500px] bg-blue-500 overflow-hidden flex flex-col items-center gap-4 rounded-xl">
      {isLoading && (
        <p className="h-[70%] w-full text-4xl opacity-50 flex justify-center items-center">
          ...Loading
        </p>
      )}
      <img
        src={image?.src}
        alt={image?.place}
        className={clsx("h-[70%] w-full ", { hidden: isLoading })}
        onLoad={() => setIsLoading(false)}
      />

      <h2 className="text-center font-bold text-4xl ">{image.place}</h2>
      <button
        className="text-2xl font-medium border border-solid hover:bg-blue-800 transition-all duration-100 rounded-lg border-white py-1 px-3 "
        onClick={handleClick}
      >
        Next
      </button>
    </div>
  );
};
export default ImageLoad;

let images = [
  {
    place: "Penang, Malaysia",
    src: "https://i.imgur.com/FJeJR8M.jpg",
  },
  {
    place: "Lisbon, Portugal",
    src: "https://i.imgur.com/dB2LRbj.jpg",
  },
  {
    place: "Bilbao, Spain",
    src: "https://i.imgur.com/z08o2TS.jpg",
  },
  {
    place: "Valparaíso, Chile",
    src: "https://i.imgur.com/Y3utgTi.jpg",
  },
  {
    place: "Schwyz, Switzerland",
    src: "https://i.imgur.com/JBbMpWY.jpg",
  },
  {
    place: "Prague, Czechia",
    src: "https://i.imgur.com/QwUKKmF.jpg",
  },
  {
    place: "Ljubljana, Slovenia",
    src: "https://i.imgur.com/3aIiwfm.jpg",
  },
];
