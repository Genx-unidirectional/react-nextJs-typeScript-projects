import Image from "next/image";
import { Lustria } from "next/font/google";
const lustria = Lustria({ subsets: ["latin"], weight: "400" });
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-3 flex justify-between items-center bg-violet-700 ">
        <section className="">
          <h1 className={`${lustria.className} text-3xl `}>Next</h1>
        </section>
      </div>
    </>
  );
}
