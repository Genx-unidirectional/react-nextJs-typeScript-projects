import { cn } from "@/lib/utils";

export default function ColorComponent({
  id,
  state,
}: {
  id: number;
  state: number;
}) {
  return (
    <div
      className={cn(
        "w-full h-12 rounded-lg border transition-all duration-700 border-black",
        {
          "bg-indigo-500": id === state,
        }
      )}
    ></div>
  );
}
