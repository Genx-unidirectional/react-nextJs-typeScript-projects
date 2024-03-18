type Todo = {
  id: number;
  item: string;
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
  type: REDUCER_ACTION_TYPES;
  payload?: string;
};
const reducer = (state: InitStateType, action: Action_Type): InitStateType => {
  switch (action.type) {
    case Reducer_Actions.ADD: {
      return { ...state };
    }
    default: {
      throw new Error("Can't find the action type");
    }
  }
};

const BasicReducer = () => {
  return (
    <div className="text-black h-[500px] w-[400px] bg-white rounded-sm-">
      BasicReducer
    </div>
  );
};
export default BasicReducer;
