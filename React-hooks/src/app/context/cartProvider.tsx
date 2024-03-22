// 1->creating cart state type and it's initial state
// 2->Creating actions and reducer to manipulate the
// 3->Creating context with initial state

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
      }
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
    }
    default: {
      throw new Error("Invalid action");
    }
  }
};
