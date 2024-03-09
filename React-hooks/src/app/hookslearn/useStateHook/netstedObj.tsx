"use client";

import { IndentIcon } from "lucide-react";
import { ChangeEvent, useState } from "react";

type User = {
  name: string;
  hobby: string;
  age: number;
  verified: boolean;
};
const UserInfoChange = () => {
  const [info, setInfo] = useState<User>({
    name: "",
    hobby: "",
    age: 0,
    verified: false,
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setInfo({ ...info, [e.target.name]: newValue });
  };
  return (
    <div className=" bg-pink-600 rounded-xl p-2 flex flex-col gap-4">
      <form
        action=""
        className="flex w-3/2 h-3/5 p-2 bg-pink-400 rounded-xl gap-[2px] flex-col"
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={info.name}
          className="bg-white rounded-xl "
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="hobby">Hobby:</label>
        <input
          type="text"
          name="hobby"
          id="hobby"
          value={info.hobby}
          className="bg-white rounded-xl "
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          name="age"
          id="age"
          value={info.age}
          className="bg-white rounded-xl"
          onChange={(e) => handleChange(e)}
        />
        <div className="flex items-center gap-3">
          <label htmlFor="verified">Verified</label>
          <input
            type="checkbox"
            name="verified"
            id="verified"
            checked={info.verified}
            className="bg-white rounded-xl w-5 h-5 -order-1  "
            onChange={(e) => handleChange(e)}
          />
        </div>
      </form>
      <div className="bg-white p-2 flex-col flex gap-1 text-black rounded-xl font-bold">
        <p>Name : {info.name}</p>
        <p>Hobby : {info.hobby}</p>
        <p>age : {info.age}</p>
        <p>verified : {info.verified ? "🗸" : "❌"}</p>
      </div>
    </div>
  );
};
export default UserInfoChange;
