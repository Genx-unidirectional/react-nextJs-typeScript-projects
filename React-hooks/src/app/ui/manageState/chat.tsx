import { Contact } from "@/lib/data";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  contact: Contact;
  setTextObj: Dispatch<
    SetStateAction<{
      0: string;
      1: string;
      2: string;
    }>
  >;
  textObj: {
    0: string;
    1: string;
    2: string;
  };
};
function Chat({ contact, setTextObj, textObj }: Props) {
  const [textIt, setText] = useState("");
  const identity = contact.id.toString();
  const handleClick = () => {
    setTextObj({ ...textObj, "0": textIt });
  };
  return (
    <div className="w-full h-full flex flex-col gap-[1px] ml-[2px]">
      <textarea
        className="w-full h-full  bg-white text-black p-[1px] rounded-r-lg border border-black "
        name=""
        id=""
        value={
          textIt.length === 0
            ? textObj[contact.id as keyof typeof textObj]
            : textIt
        }
        onChange={(e) => setText(e.target.value)}
        cols={2}
        rows={2}
        placeholder={`Send to ${contact.name}`}
      ></textarea>
      <button
        onClick={handleClick}
        className="bg-black w-full py-2  rounded-r-lg font-medium text-xl text-center"
      >
        Send to {contact.email}
      </button>
    </div>
  );
}
export default Chat;
