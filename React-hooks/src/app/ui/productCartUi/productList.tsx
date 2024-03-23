import UseProduct from "@/app/hooks/useProduct";
import Product from "./product";

const ProductList = () => {
  const { products } = UseProduct();
  return (
    <main className="h-full p-1 text-black flex flex-col justify-center items-center ">
      {products.map((product) => {
        return <Product />;
      })}
    </main>
  );
};
export default ProductList;
