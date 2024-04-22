"use client";

import RefWithType from "./RefWithType";
import SimpleRef from "./SimpleInputRef";

function page() {
  return (
    <div className="bg-white text-black min-h-screen w-full flex flex-col py-10 gap-4 items-center">
      <RefWithType />
      <SimpleRef />
    </div>
  );
}
export default page;
