import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen ">
      <div className=""></div>
      <div>{children}</div>
    </div>
  );
}
