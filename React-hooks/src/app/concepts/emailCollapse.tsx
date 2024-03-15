import { useState } from "react";
import ExpandEmail from "./expandEmail";
import { Contact } from "./contactWithEdit";
import { link } from "fs";
const EmailCollapse = () => {
  const [reverse, setReverse] = useState<boolean>(false);
  const detailContact: Contact[] = [...contacts];
  if (reverse) {
    detailContact.reverse();
  }
  return (
    <div className="h-4/5 p-4 w-[80%] bg-white flex flex-col gap-1 text-black rounded-lg ">
      <div className="flex items-center justify-center gap-5">
        <input
          type="checkbox"
          checked={reverse}
          className="w-7 h-7"
          name="reverse"
          id="reverse"
          onChange={() => setReverse(!reverse)}
        />
        <label htmlFor="reverse" className="text-3xl font-medium">
          Show in reverse order
        </label>
      </div>
      <ul className="w-full flex-grow p-2 flex flex-col justify-evenly items-center list-none">
        {detailContact.map((contact, idx) => {
          return (
            <li
              key={idx}
              className="flex justify-center items-center flex-col gap-2"
            >
              <ExpandEmail contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default EmailCollapse;

const contacts = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
];
