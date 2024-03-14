import { useState } from "react";

type Contact = {
  id: number;
  name: string;
  email: string;
};

type ChildProps = {
  contact: Contact;
};

const Chat = ({ contact }: ChildProps) => {
  const [text, setText] = useState<string>("");
  return (
    <div className="flex flex-col items-center gap-4">
      <textarea
        className="bg-white rounded-xl p-2 text-black"
        name={contact.name}
        placeholder={`Send message to ${contact.name}`}
        id="name"
        cols={30}
        value={text}
        rows={10}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button className="bg-white rounded-xl font-bold hover:bg-black hover:text-white text-black p-2">
        {contact.email}
      </button>
    </div>
  );
};
export default Chat;
