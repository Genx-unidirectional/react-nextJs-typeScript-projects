import Image from "next/image";
import { useRef } from "react";

export default function CatFriends() {
  const firstCatRef = useRef<HTMLImageElement>(null);
  const secondCatRef = useRef<HTMLImageElement>(null);
  const thirdCatRef = useRef<HTMLImageElement>(null);

  function handleScrollToFirstCat() {
    firstCatRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <div className="w-400 h-400 border-2 border-gray-400 p-4">
      <nav className="mb-4">
        <button
          onClick={handleScrollToFirstCat}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Tom
        </button>
        <button
          onClick={handleScrollToSecondCat}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Maru
        </button>
        <button
          onClick={handleScrollToThirdCat}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Jellylorum
        </button>
      </nav>
      <div>
        <ul>
          <li>
            <Image
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              width={100}
              height={100}
              ref={firstCatRef}
            ></Image>
          </li>
          <li>
            <Image
              src="https://placekitten.com/g/300/200"
              width={100}
              height={100}
              alt="Maru"
              ref={secondCatRef}
            ></Image>
          </li>
          <li>
            <Image
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
              width={100}
              height={100}
              ref={thirdCatRef}
            ></Image>
          </li>
        </ul>
      </div>
    </div>
  );
}
