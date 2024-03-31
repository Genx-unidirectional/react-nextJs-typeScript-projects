import { ProductType } from "@/app/context/productProvider";
import { Dispatch } from "react";
import {
  ActionType,
  Use_Reducer_Action_Type,
} from "@/app/context/cartProvider";

export type ProductProps = {
  inCart: boolean;
  product: ProductType;
  dispatch: Dispatch<ActionType>;
  Reducer_Actions: Use_Reducer_Action_Type;
};
