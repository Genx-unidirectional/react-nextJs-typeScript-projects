import { Contact } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

type Props = {
  className: string;
  contacts: Contact[];
  setState: Dispatch<SetStateAction<number>>;
};
function ContactList({ className, contacts, setState }: Props) {
  return (
    <div className="flex h-full w-full flex-col gap-[1px]">
      {contacts.map((contact) => (
        <button
          key={contact.id}
          onClick={() => setState(contact.id)}
          className={cn(
            "w-full h-1/3 bg-black text-center font-bold text-xl",
            className
          )}
        >
          {contact.name}
        </button>
      ))}
    </div>
  );
}
export default ContactList;
