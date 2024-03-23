"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function SideNav() {
  const linkArr = [
    { name: "useStateHook", url: "/hookslearn/useStateHook" },
    { name: "useEffectHook", url: "/hookslearn/useEffectHook" },
    { name: "useReducerHook", url: "/hookslearn/useReducerHook" },
    { name: "useContext", url: "/hookslearn/useContext" },
    { name: "useRef", url: "/hookslearn/useRef" },
  ];
  const pathname = usePathname();
  return (
    <>
      <nav className="flex w-full overflow-y-scroll  p-2 gap-4  font-serif">
        {linkArr.map((link) => {
          return (
            <li key={link.name} className="relative w-[25%] list-none  ">
              <Link
                className={clsx("", {
                  "font-bold text-teal-300 transition-all duration-500":
                    pathname == link.url,
                })}
                href={link.url}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </nav>
    </>
  );
}
