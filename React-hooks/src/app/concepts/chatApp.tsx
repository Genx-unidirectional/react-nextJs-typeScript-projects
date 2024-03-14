import { useState } from "react";
import Contacts from "./contacts";
import Chat from "./chat";
type contact = {
  id: number;
  name: string;
  email: string;
};
export default function ChatApp() {
  const [to, setTo] = useState<contact>(contacts[0]);
  return (
    <div className="h-[500px] w-[400px] bg-violet-600 mt-8 rounded-xl items-center flex flex-col gap-3 text-white">
      <h2 className="text-2xl font-bold"> Select contact to send message</h2>
      <Contacts
        contact={to}
        contacts={contacts}
        onSet={(contact: contact) => setTo(contact)}
      />
      <Chat key={to.id} contact={to} />
    </div>
  );
}
const contacts: contact[] = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
