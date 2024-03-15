import { Contact } from "./contactWithEdit";
type childProps = {
  contacts: Contact[];
  selectedId: number;
  onSelect: (id: number) => void;
};
export default function ContactList({
  contacts,
  selectedId,
  onSelect,
}: childProps) {
  return (
    <section>
      <ul>
        {contacts.map((contact: Contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                onSelect(contact.id);
              }}
            >
              {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
