import { Redressed } from "next/font/google";
import { Dispatch, FormEvent, useReducer, useState } from "react";
import TodoComponent from "@/app/ui/useReducerUi/todoComponent";
type Todo = {
  id: number;
  item: string;
};
export type TodoComponentChildProps = {
  dispatch: React.Dispatch<Action_Type>;
  todo: Todo;
  Reducer_Actions: REDUCER_ACTION_TYPES;
};

type InitStateType = {
  todos: Todo[];
};
const initState: InitStateType = {
  todos: [],
};

const Reducer_Actions = {
  ADD: "ADD",
  DELETE: "DELETE",
  REMOVE: "REMOVE",
  EDIT: "EDIT",
};
type REDUCER_ACTION_TYPES = typeof Reducer_Actions;

type Action_Type = {
  type: string;
  payload?: { id?: number; item?: string };
  edit?: boolean;
};
const reducer = (state: InitStateType, action: Action_Type): InitStateType => {
  switch (action.type) {
    case Reducer_Actions.ADD: {
      if (!action.payload) {
        throw new Error("The add text is not provided");
      }
      if (state.todos.length > 7) {
        throw new Error("Max number of todo added");
      }
      const payload: string = action.payload.item!;
      const newTodoId =
        state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 1;
      // console.log(newTodoId);
      return {
        ...state,
        todos: [...state.todos, { id: newTodoId, item: payload }],
      };
    }
    case Reducer_Actions.EDIT: {
      if (!action.payload) {
        throw new Error("Payload is missing in the edit");
      }
      console.log("triggered");
      const { id, item } = action.payload;
      if (!id) {
        throw new Error("Error in id");
      }
      if (!item) {
        throw new Error("Error in item");
      }
      const editedTodo = { id, item };
      const filteredTodo = state.todos.filter((todo) => todo.id !== id);
      const newTodo = [...filteredTodo, editedTodo];
      const sortedTodo = newTodo.sort((a, b) => a.id - b.id);
      return { ...state, todos: sortedTodo };
    }
    case Reducer_Actions.REMOVE: {
      const id = action.payload?.id;
      if (!id) {
        throw new Error("Error in id");
      }
      const filteredTodo = state.todos.filter((todo) => todo.id !== id);
      return { ...state, todos: filteredTodo };
    }
    case Reducer_Actions.DELETE: {
      return { ...state, todos: [] };
    }
    default: {
      throw new Error("Can't find the action type");
    }
  }
};

const BasicReducer = () => {
  const [state, dispatch]: [InitStateType, Dispatch<Action_Type>] = useReducer(
    reducer,
    initState
  );
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = document.getElementById("todo") as HTMLInputElement;
    if (!input.value) {
      return;
    }
    dispatch({ type: Reducer_Actions.ADD, payload: { item: input.value } });
    input.value = "";
  };
  return (
    <div className="bg-blue-500 h-[500px] w-[400px] p-2 rounded-sm flex flex-col items-center">
      <form
        className=" w-full flex flex-col  mb-1 gap-2 items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Add todo"
          className="bg-white  w-full rounded-sm p-1 text-xl text-black"
          name="todo"
          id="todo"
        />
        <button className="bg-blue-900 text-xl font-bold w-full rounded-sm py-1">
          Submit
        </button>
      </form>
      <hr className="w-full border border-b-[1px] my-2 border-white mx-auto" />
      <div className="flex w-full flex-col">
        <h2 className="text-2xl font-bold text-center">Your Todo</h2>
        <ul className="flex flex-col gap-[2px] items-center w-full h-3/4">
          {state.todos.map((todo) => {
            return (
              <TodoComponent
                key={todo.id}
                todo={todo}
                dispatch={dispatch}
                Reducer_Actions={Reducer_Actions}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default BasicReducer;
