import { ChangeEvent, useState } from "react";

function ObjectUpdate() {
  const [people, setPeople] = useState({
    name: "",
    age: 0,
    active: false,
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setPeople({ ...people, [name]: inputValue });
  };
  return (
    <div className="bg-white w-2/3  text-black rounded-lg flex flex-col gap-2 items-start p-3">
      <label htmlFor="name">Name :</label>
      <input
        type="text"
        name="name"
        value={people.name}
        onChange={handleChange}
        className="p-2 rounded-lg text-xl w-full border border-black bg-white"
      />
      <label htmlFor="name">Age :</label>
      <input
        type="number"
        name="age"
        value={people.age}
        onChange={handleChange}
        className="p-2 rounded-lg text-xl w-full border border-black bg-white"
      />
      <div className="flex gap-1 items-center justify-start">
        <input
          type="checkbox"
          name="active"
          checked={people.active}
          onChange={handleChange}
          className="w-6 h-6"
        />
        <label htmlFor="name">Active</label>
      </div>
    </div>
  );
}
export default ObjectUpdate;
