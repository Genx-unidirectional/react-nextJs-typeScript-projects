import { useRef } from "react";

interface Cat {
  id: number;
  imageUrl: string;
}

const catList: Cat[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}

export default function CatFriends2() {
  const itemsRef = useRef<Map<number, HTMLLIElement>>(new Map());

  function scrollToId(itemId: number) {
    const node = itemsRef.current.get(itemId);
    if (node) {
      node.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  return (
    <div className="w-400 h-400 overflow-hidden overflow-y-scroll">
      <nav className="mb-4">
        <button
          onClick={() => scrollToId(0)}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Tom
        </button>
        <button
          onClick={() => scrollToId(5)}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Maru
        </button>
        <button
          onClick={() => scrollToId(9)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Jellylorum
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li
              key={cat.id}
              ref={(node) => {
                if (node) {
                  itemsRef.current.set(cat.id, node);
                } else {
                  itemsRef.current.delete(cat.id);
                }
              }}
            >
              <img
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
                className="w-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
