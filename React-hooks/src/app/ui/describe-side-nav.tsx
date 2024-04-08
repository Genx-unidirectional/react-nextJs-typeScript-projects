"use client";
import { navLinks } from "@/config/paths";
import { usePathname } from "next/navigation";
import DescribeNav from "./describeui/describenav";
function SideNavDescribe() {
  const currentPathName = usePathname();
  const navArr = [
    {
      name: "describeUi",
      component: <DescribeNav />,
    },
  ];
  const component = navArr.find(
    (navArrItem) =>
      navArrItem.name ===
      navLinks.find((item) => item.pathname === currentPathName)?.name
  )?.component;
  return (
    <div className="h-full overflow-hidden flex items-center flex-col justify-center text-white overflow-y-scroll describe-nav-width scrollbar-thin">
      {component}
    </div>
  );
}
export default SideNavDescribe;
