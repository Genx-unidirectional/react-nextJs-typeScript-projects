import { manageNavLinks } from "@/config/paths";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function DescribeNav() {
  const getPath = usePathname();
  console.log(getPath);
  return (
    <div className="w-full  h-full">
      <h2 className="font-bold text-center text-xl bg-gradient-to-b text-transparent from-gray-50 mb-4 to-gray-400 bg-clip-text">
        State Manage
      </h2>
      <ul className="list-none flex p-2 flex-col w-full">
        {manageNavLinks.map((item) => (
          <li
            key={item.pathName}
            className="text-white w-full flex justify-between items-center rounded-md hover:bg-slate-700 pl-2 py-1"
          >
            <Link
              className={cn(
                "text-gray-400 text-xl first first-letter:uppercase"
              )}
              href={item.pathName}
            >
              {item.name}
            </Link>
            <ChevronRight className="h-6 w-6 text-white mt-1" />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default DescribeNav;
