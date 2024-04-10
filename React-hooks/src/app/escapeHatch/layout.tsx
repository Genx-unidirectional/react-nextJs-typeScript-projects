import NavWrapper from "../ui/navWrapper";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full grid grid-cols-12 pt-12">
      <div className="bg-gray-700 col-span-4 md:col-span-4">
        <NavWrapper />
      </div>
      <div className="bg-gray-900 border-l border-white overflow-hidden  col-span-8 md:col-span-8">
        {children}
      </div>
    </div>
  );
}
export default Layout;
