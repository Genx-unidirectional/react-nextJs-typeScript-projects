import { useCounterText } from "./contextWithReducer";

const InputField = () => {
  const { text, handleChange } = useCounterText();
  return (
    <div className="flex-grow rounded-xl gap-4 bg-white p-2 flex flex-col items-center">
      <input
        className="rounded-xl bg-black text-white p-2 text-2xl"
        type="text"
        name="text"
        id="text"
        value={text}
        onChange={handleChange}
      />
      <h2 className="flex-grow text-black text-justify text-3xl ">{text}</h2>
    </div>
  );
};
export default InputField;
