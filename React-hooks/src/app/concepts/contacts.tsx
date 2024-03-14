import clsx from "clsx";

type contact = {
  id: number;
  name: string;
  email: string;
};

type ChildProps = {
  contacts: contact[];
  contact: contact;
  onSet: (contact: contact) => void;
};

const Contacts = ({ contacts, contact, onSet }: ChildProps) => {
  return (
    <ul className="flex flex-col bg-white p-2 rounded-xl gap-2 text-black w-2/3">
      {contacts.map((person) => {
        return (
          <li
            key={person.id}
            className={clsx(
              "text-xl font-medium text-center w-full hover:bg-slate-600 hover:text-white rounded-xl",
              { "bg-black text-white": person.name == contact.name }
            )}
            onClick={() => onSet(person)}
          >
            {person.name}
          </li>
        );
      })}
    </ul>
  );
};
export default Contacts;
