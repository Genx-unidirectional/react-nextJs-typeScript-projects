import SideNavDescribe from "../ui/describe-side-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen pt-12  grid grid-cols-12 ">
      <div className="bg-slate-800 col-span-4 relative lg:col-span-3  ">
        <SideNavDescribe />
      </div>
      <div className=" h-full bg-slate-900 border-l border-slate-400 col-span-8  overflow-hidden overflow-y-scroll lg:col-span-9 ">
        {children}
      </div>
    </div>
  );
}
