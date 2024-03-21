//Tasks:
//1->Make initial state for counter
//2->Make reducer function for counter
//3->Make custom hook to create the useReducer implementation which return the state, dispatch, actions
//4->Make context
//5->create the context provider which take the reducer custom hook at value as a function which return the all dispatch, state, action types which can pass through context provider

import {
  ChangeEvent,
  ReactElement,
  createContext,
  useContext,
  useReducer,
} from "react";

type InitState = {
  count: number;
  text: string;
};

const initState: InitState = {
  count: 0,
  text: "",
};

export const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  TEXTING,
}
type ACTION_TYPE = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: InitState, action: ACTION_TYPE): InitState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT: {
      return { ...state, count: state.count + 1 };
    }
    case REDUCER_ACTION_TYPE.DECREMENT: {
      return { ...state, count: state.count - 1 };
    }
    case REDUCER_ACTION_TYPE.TEXTING: {
      return { ...state, text: action.payload || "" };
    }
    default:
      throw new Error("Unknown action type");
  }
};

const CustomPropHook = (initState: InitState) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const increment = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.TEXTING, payload: e.target.value });
  };
  return { state, increment, decrement, handleChange };
};
type InitContextStateType = ReturnType<typeof CustomPropHook>;
const initContextState: InitContextStateType = {
  state: initState,
  increment: () => {},
  decrement: () => {},
  handleChange: (e: ChangeEvent<HTMLInputElement>) => {},
};
const CounterContext = createContext<InitContextStateType>(initContextState);

export const ContextProvider = ({ children }: { children: ReactElement }) => {
  return (
    <CounterContext.Provider value={CustomPropHook(initState)}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext);
  return { count, increment, decrement };
};

export const useCounterText = () => {
  const {
    state: { text },
    handleChange,
  } = useContext(CounterContext);
  return { text, handleChange };
};
