import Link from "next/link";

export default function SideNav() {
  const linkArr = [{ name: "useStateHook", url: "/useStateHook" }];
  return (
    <>
      <nav className="flex w-full p-2 gap-2 text-white font-serif">
        {linkArr.map((link) => {
          return (
            <li>
              <Link href={link.url}>{link.name}</Link>
            </li>
          );
        })}
      </nav>
    </>
  );
}
