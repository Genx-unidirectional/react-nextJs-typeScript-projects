"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
const Nav = () => {
  const pathName = usePathname();
  const navLinks = [
    {
      name: "Hooks",
      pathname: "/hookslearn",
    },
    {
      name: "Concepts",
      pathname: "/concepts",
    },
  ];
  return (
    <nav className="flex nav-width border border-r-white p-2 items-center gap-2 overflow-x-scroll overflow-y-hidden overflow-hidden">
      {navLinks.map((link) => {
        return (
          <li className="list-none">
            <Link
              href={link.pathname}
              className={clsx("font-medium", {
                "font-bold  text-blue-300": link.pathname == pathName,
              })}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </nav>
  );
};
export default Nav;
