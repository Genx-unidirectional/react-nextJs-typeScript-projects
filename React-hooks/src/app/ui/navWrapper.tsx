"use client";
import { navLinks } from "@/config/paths";
import { usePathname } from "next/navigation";
import ManageNav from "./manageState/manageNav";
function NavWrapper() {
  const currentPath = usePathname();
  const navArr = [
    {
      name: "State Manage",
      component: <ManageNav />,
    },
  ];

  const component = navArr.find(
    (item) =>
      navLinks.find((link) => link.pathname === currentPath)?.name === item.name
  )?.component;
  return <div className="h-full w-full">{component}</div>;
}
export default NavWrapper;
