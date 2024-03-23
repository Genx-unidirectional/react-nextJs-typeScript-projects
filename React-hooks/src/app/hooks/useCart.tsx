import { useContext } from "react";
import { CartContext, CartContextState } from "../context/cartProvider";

export default function UseCart(): CartContextState {
  return useContext(CartContext);
}
