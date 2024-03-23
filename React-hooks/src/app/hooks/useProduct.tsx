import { useContext } from "react";
import { ProductContext, UseProductType } from "../context/productProvider";
export default function UseProduct(): UseProductType {
  return useContext(ProductContext);
}
