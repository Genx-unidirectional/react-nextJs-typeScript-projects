"use client";
import { navLinks } from "@/config/paths";
import { usePathname } from "next/navigation";
import DescribeNav from "./describeui/describenav";
import InteractNav from "./interactivity/interactNav";
function SideNavDescribe() {
  const currentPathName = usePathname();
  const navArr = [
    {
      name: "DescribeUi",
      component: <DescribeNav />,
    },
    {
      name: "Interactivity",
      component: <InteractNav />,
    },
  ];
  const component = navArr.find(
    (navArrItem) =>
      navArrItem.name ===
      navLinks.find((item) => item.pathname === currentPathName)?.name
  )?.component;
  return (
    <div className="h-full py-2 overflow-hidden w-full flex items-center flex-col justify-center text-white overflow-y-scroll describe-nav-width scrollbar-thin">
      {component}
    </div>
  );
}
export default SideNavDescribe;
