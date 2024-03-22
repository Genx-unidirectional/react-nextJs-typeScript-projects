import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const ProductNav = () => {
  return (
    <header className="bg-white flex fixed w-full items-center justify-between shadow-2xl p-1 border border-solid border-b-4 ">
      <h1 className="text-black font-bold text-3xl sm:text-4xl">Gex Store</h1>
      <Link href="/productCart/cart">
        <ShoppingCartIcon className="w-10 h-10 text-green-500" />
      </Link>
    </header>
  );
};
export default ProductNav;
