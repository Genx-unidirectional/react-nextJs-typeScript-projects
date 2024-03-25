import React, { useRef, useEffect } from "react";

interface Cat {
  id: number;
  imageUrl: string;
}

const catList: Cat[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `https://picsum.photos/250/200?random=${i}`,
  });
}

export default function CatFriends() {
  const itemsRef = useRef<Map<number, HTMLLIElement | null>>(new Map());

  function scrollToId(itemId: number) {
    const map = getMap();
    const node = map.get(itemId);
    if (node) {
      node.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  function getMap(): Map<number, HTMLLIElement | null> {
    return itemsRef.current;
  }

  useEffect(() => {
    // Clean up the ref on component unmount
    return () => {
      itemsRef.current.clear();
    };
  }, []);

  return (
    <>
      <nav className="flex justify-center space-x-4 my-4 overflow-y-scroll overflow-hidden">
        <button
          onClick={() => scrollToId(0)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Tom
        </button>
        <button
          onClick={() => scrollToId(5)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Maru
        </button>
        <button
          onClick={() => scrollToId(9)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Jellylorum
        </button>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ul>
          {catList.map((cat) => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
              className="bg-gray-100 rounded-md overflow-hidden shadow-md"
            >
              <img
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
                className="w-full h-auto"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
