import { FormEvent, useState } from "react";
import LogForm from "../ui/interactivity/logForm";

function BasicForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // setData();
  };
  return (
    <div className="w-3/4 h-1/2 bg-white rounded-lg p-4">
      <LogForm handleSubmit={handleSubmit} className="gap-2" />
    </div>
  );
}
export default BasicForm;
