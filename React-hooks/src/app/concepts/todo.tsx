import { useState } from "react";
import TodoMaker from "../ui/concepts/todoAdder";
import { Todo, initialTodo } from "../ui/concepts/todos";
import clsx from "clsx";

export default function Todo() {
  const [todo, setTodo] = useState<Todo[]>(initialTodo);
  const leftTodo = todo.filter((todo) => todo.completed).length;

  return (
    <div className="w-4/5 h-4/5 flex flex-col items-center gap-2 bg-teal-600 rounded-lg p-2 text-white ">
      <TodoMaker />
      <div className="flex justify-center items-center gap-2">
        <input className="h-6 w-6" type="checkbox" name="sort" id="sort" />
        <label className="font-bold text-xl text-nowrap " htmlFor="sort">
          show completed todo
        </label>
      </div>
      {leftTodo > 0 ? <p></p> : <p>{`${leftTodo} todo left`}</p>}
      <ul className="w-full flex-grow flex flex-col gap-1 overflow-y-scroll overflow-hidden">
        {todo.map((item) => {
          return (
            <li
              key={item.id}
              className={clsx(
                "bg-white text-2xl capitalize font-bold text-black w-full rounded-lg p-2",
                {
                  "line-through": item.completed,
                }
              )}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
