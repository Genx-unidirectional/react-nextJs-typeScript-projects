export type Todo = {
  id: number;
  text: string;
  completed?: boolean;
};
let next = 0;

export function createTodo(todo: string, completed: boolean = false) {
  return {
    id: next++,
    text: todo,
    completed,
  };
}

export const initialTodo = [
  createTodo("start"),
  createTodo("persist"),
  createTodo("excited"),
];
