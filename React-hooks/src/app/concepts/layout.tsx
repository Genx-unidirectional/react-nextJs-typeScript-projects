import Head from "@/app/ui/head";

export default function Layout({ children }: { children: React.ReactElement }) {
  const linksArr = [{}];
  return (
    <div className="min-h-screen flex flex-col bg-slate-800">
      <Head />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
