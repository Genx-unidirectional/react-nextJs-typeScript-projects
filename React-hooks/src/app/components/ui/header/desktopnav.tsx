import Link from "next/link";

function DeskTopNav() {
  return (
    <div>
      <nav>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Practices</Link>
        <Link href={"/"}>Blog</Link>
      </nav>
    </div>
  );
}
export default DeskTopNav;
