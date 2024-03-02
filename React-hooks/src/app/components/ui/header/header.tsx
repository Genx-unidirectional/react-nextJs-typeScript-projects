import SideNav from "./sidenav";

const Header = () => {
  return (
    <header className="sticky z-10 bg-black text-white  dark:bg-slate-100 dark:text-slate-900">
      <div className="sm:max-w-4xl w-full flex justify-between items-center  ">
        <h1 className="text-black font-bold font-serif">GenxReal</h1>
        <SideNav />
      </div>
    </header>
  );
};
export default Header;
