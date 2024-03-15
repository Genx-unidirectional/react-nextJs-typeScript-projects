import { useState } from "react";
import { Contact } from "./contactWithEdit";
type ChildProps = {
  contact: Contact;
};
const ExpandEmail = ({ contact }: ChildProps) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  return (
    <>
      <p>
        <b>{contact.name}</b>
      </p>
      {isExpand && (
        <p>
          <i>{contact.email}</i>
        </p>
      )}
      <button
        className=" bg-black p-[2px] rounded-sm text-white"
        onClick={() => setIsExpand(!isExpand)}
      >
        Expand
      </button>
    </>
  );
};
export default ExpandEmail;
