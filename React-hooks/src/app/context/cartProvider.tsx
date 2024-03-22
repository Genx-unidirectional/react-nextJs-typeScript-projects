// 1->creating cart state type and it's initial state
// 2->Creating actions and reducer to manipulate the
// 3->Creating context with initial state

import { ReactElement, createContext, useMemo, useReducer } from "react";
import { ProductType } from "./productProvider";

// 4->Creating cart  provider wrapper
type CartItemType = {
  sku: string;
  name: string;
  price: number;
  qty: number;
};
type CartStateType = { cart: CartItemType[] };
const initCartState = { cart: [] };
const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

type ActionType = {
  type: string;
  payload?: CartItemType;
};

const reducer = (state: CartStateType, action: ActionType): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("The payload is missing in the add action");
      }
      const { sku, name, price } = action.payload;
      const isItemThere = state.cart.find((item) => item.sku === sku);
      const cartItemQty = isItemThere ? isItemThere.qty + 1 : 1;

      const filteredCart = state.cart.filter((item) => item.sku !== sku);
      return {
        ...state,
        cart: [
          ...filteredCart,
          {
            sku,
            name,
            price,
            qty: cartItemQty,
          },
        ],
      };
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("The payload is not present in remove action");
      }
      const { sku } = action.payload;
      const filteredCart = state.cart.filter((item) => item.sku !== sku);
      return { ...state, cart: [...filteredCart] };
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("The payload is missing in the quantity action");
      }
      const { sku, qty } = action.payload;
      const filteredCart = state.cart.filter((item) => item.sku !== sku);
      const filteredItem = state.cart.find((item) => item.sku === sku);
      if (!filteredItem) {
        throw new Error(
          "The item should be added to cart in order to be exits"
        );
      }
      return { ...state, cart: [...filteredCart, { ...filteredItem, qty }] };
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }
    default: {
      throw new Error("Invalid action");
    }
  }
};

const UseCustomHook = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);
  const Reducer_Actions = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);
  const cart = state.cart.sort((a, b) => {
    let AValue = Number(a.sku);
    let BValue = Number(b.sku);
    return AValue - BValue;
  });
  const totalItems = state.cart.reduce((acc, curr) => curr.qty + acc, 0);
  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(state.cart.reduce((acc, curr) => curr.price * curr.qty + acc, 0));

  return { cart, dispatch, totalItems, totalPrice, Reducer_Actions };
};

export type CartContextState = ReturnType<typeof UseCustomHook>;
const initCartContextState: CartContextState = {
  cart: [],
  dispatch: () => {},
  totalItems: 0,
  totalPrice: "",
  Reducer_Actions: REDUCER_ACTION_TYPE,
};

const CartContext = createContext<CartContextState>(initCartContextState);

export const CartProvider = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return (
    <CartContext.Provider value={UseCustomHook(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};
