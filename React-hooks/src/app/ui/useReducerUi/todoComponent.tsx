import { useState } from "react";
import { TodoComponentChildProps } from "@/app/hookslearn/useReducerHook/01-basic-example";
function TodoComponent({
  todo,
  dispatch,
  Reducer_Actions,
}: TodoComponentChildProps) {
  const [edit, setEdit] = useState<boolean>(false);
  const [text, setText] = useState<string>(todo.item);
  const handleAdd = () => {
    dispatch({
      type: Reducer_Actions.EDIT,
      payload: { id: todo.id, item: text },
    });
    setEdit(false);
  };
  return (
    <li className="flex w-full gap-[1px]">
      {edit ? (
        <textarea
          name=""
          className="bg-blue-300 flex-grow h-[40px] flex justify-start p-1 items-center border border-solid border-white text-xl rounded-sm resize-none"
          id="textItem"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <div
          className="bg-blue-300 flex-grow h-[40px] flex justify-start p-1 items-center border border-solid border-white text-xl rounded-sm"
          onClick={() => setEdit(true)}
        >
          {todo.item}
        </div>
      )}
      <button
        className="w-[40px] bg-white text-black text-4xl active:scale-90 font-bold rounded-sm h-[40px] flex flex-col justify-center items-center"
        disabled={!edit}
        onClick={handleAdd}
      >
        <span className="mb-1">+</span>
      </button>
      <button
        className="w-[40px] h-[40px] bg-white rounded-sm active:scale-90 text-black font-bold text-4xl flex flex-col justify-center items-center"
        onClick={() =>
          dispatch({ type: Reducer_Actions.REMOVE, payload: { id: todo.id } })
        }
      >
        <span className="mb-1">-</span>
      </button>
    </li>
  );
}

export default TodoComponent;
