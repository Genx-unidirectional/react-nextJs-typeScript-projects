import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type SearchProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

function SearchComponent({ query, setQuery }: SearchProps) {
  const [text, setText] = useState("");
  const handleClick = () => {
    setQuery(text);
    setText("");
  };
  return (
    <div className="flex items-center p-1 gap-1 w-full ">
      <button
        className="bg-black p-3 rounded-l-lg  text-white font-medium"
        onClick={handleClick}
      >
        Search
      </button>
      <input
        className="text-xl  text-black border border-black p-2 rounded-r-lg bg-white w-full"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
export default SearchComponent;
