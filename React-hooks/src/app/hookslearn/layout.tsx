"use client";

import React from "react";
import SideNav from "../ui/hookslearn/side-nav";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <main className="min-h-screen ">
      <div className="h-12 w-full fixed top-0 z-10 bg-neutral-50 dark:bg-black border-b-2  border-black dark:border-white   text-black dark:text-white">
        <SideNav />
      </div>
      <div className="flex h-full flex-col justify-center items-center  gap-4">
        {children}
      </div>
    </main>
  );
}
