import { Bars3Icon } from "@heroicons/react/16/solid";
import Nav from "./nav";
const Head = () => {
  return (
    <header className="h-12 fixed w-full bg-slate-900 border z-10 border-b-white flex justify-between items-center px-3-2">
      <h1 className="text-4xl w-10 px-1 ml-1 font-bold">G</h1>
      <Nav />
      <Bars3Icon className="w-10 h-full" />
    </header>
  );
};
export default Head;
