import ProductNav from "../ui/productCartUi/product-nav";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="min-h-screen pt-11 bg-white">
      <ProductNav />
      {children}
    </div>
  );
};
export default Layout;
