import { useState } from "react";

const NoNeedEffect = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //here there is no need of useEffect hook we make a variable to make the full name when the state changes
  const fullNam = firstName + lastName;
  return <div className="w-2/4 h-3/4">NoNeedEffect</div>;
};
export default NoNeedEffect;
