import { contacts } from "@/lib/data";
import { useState } from "react";
import Contacts from "../concepts/contacts";
import ContactList from "../ui/manageState/ContactsList";
import Chat from "../ui/manageState/chat";

function StatePreserve() {
  const [state, setState] = useState(0);
  const [textObj, setTextObj] = useState({
    "0": "",
    "1": "",
    "2": "",
  });

  const contact = contacts.find((contact) => contact.id === state)!;
  return (
    <div className="grid grid-cols-8 w-[99%] p-1 bg-white rounded-lg h-1/2">
      <div className="col-span-3 h-full">
        <ContactList className="" setState={setState} contacts={contacts} />
      </div>
      <div className="col-span-5 h-full">
        <Chat
          key={contact.id}
          contact={contact}
          setTextObj={setTextObj}
          textObj={textObj}
        />
      </div>
    </div>
  );
}
export default StatePreserve;
