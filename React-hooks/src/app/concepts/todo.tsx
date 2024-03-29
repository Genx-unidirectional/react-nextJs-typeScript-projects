import { useRef, useState } from "react";
import TodoMaker from "../ui/concepts/todoAdder";
import { Todo, initialTodo } from "../ui/concepts/todos";
import clsx from "clsx";

export default function Todo() {
  const [todo, setTodo] = useState<Todo[]>(initialTodo);
  const refContainer = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const handleMaker = (newTodo: Todo) => {
    setTodo([...todo, newTodo]);
  };
  const displayTodo = checked
    ? todo.filter((item) => item.completed == false)
    : todo;
  const leftTodo = todo.filter((item) => item.completed == false).length;
  return (
    <div className="w-4/5 h-4/5 flex flex-col items-center gap-2 bg-teal-600 rounded-lg p-2 text-white ">
      <TodoMaker handleMaker={handleMaker} />
      <div className="flex justify-center items-center gap-2">
        <input
          className="h-6 w-6"
          ref={refContainer}
          checked={checked}
          type="checkbox"
          name="sort"
          id="sort"
          onChange={() => setChecked(!checked)}
        />
        <label className="font-bold text-xl text-nowrap " htmlFor="sort">
          Show active todo
        </label>
      </div>
      {leftTodo > 0 ? (
        <p className="font-medium text-xl">{`${leftTodo} todo left`}</p>
      ) : (
        <p className="font-medium text-xl">
          Good to see that all todo completed 🫡
        </p>
      )}
      <ul className="w-full flex-grow flex flex-col gap-1 overflow-y-scroll overflow-hidden">
        {displayTodo.map((item) => {
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
