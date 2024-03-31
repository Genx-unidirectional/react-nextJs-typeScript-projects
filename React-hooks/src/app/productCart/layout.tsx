"use client";
import ProductNav from "../ui/productCartUi/product-nav";
import { CartProvider } from "../context/cartProvider";
import { ProductProvider } from "../context/productProvider";
const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="min-h-screen pt-11 flex flex-col items-center bg-white">
      <ProductNav />
      <CartProvider>
        <ProductProvider>{children}</ProductProvider>
      </CartProvider>
    </div>
  );
};
export default Layout;
