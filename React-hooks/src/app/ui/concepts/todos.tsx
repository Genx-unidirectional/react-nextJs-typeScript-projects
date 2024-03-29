import { create } from "domain";

export type Todo = {
  id: number;
  text: string;
  completed?: boolean;
};

let next = 0;
export function createTodo(todo: string, completed: boolean = false): Todo {
  return { id: next++, text: todo, completed };
}

export const initialTodo = [
  createTodo("start", true),
  createTodo("persist", true),
  createTodo("exited", true),
];
