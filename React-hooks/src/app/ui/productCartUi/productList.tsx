import UseProduct from "@/app/hooks/useProduct";
import Product from "./product";
import UseCart from "@/app/hooks/useCart";
import { ReactElement } from "react";

const ProductList = () => {
  const { products } = UseProduct();
  const { dispatch, Reducer_Actions, cart } = UseCart();
  let pageContent: ReactElement | ReactElement[] = <p>...Loading</p>;
  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart = cart.some((cartItem) => cartItem.sku === product.sku);
      return (
        <Product
          inCart={inCart}
          product={product}
          dispatch={dispatch}
          Reducer_Actions={Reducer_Actions}
        />
      );
    });
  }
  return (
    <main className="h-full p-1 text-black flex flex-col justify-center items-center">
      {pageContent}
    </main>
  );
};
export default ProductList;
