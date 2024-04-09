import { FoodItemType } from "@/config/types";

function FoodComponent({
  id,
  name,
  description,
}: {
  id: number;
  name: string;
  description: string;
}) {
  return (
    <div className=" flex flex-col gap-[2px] items-start w-full">
      <h3 className="font-medium text-black text-xl">{name} :</h3>
      <p className="w-full text-slate-800 text-lg">{description}</p>
    </div>
  );
}
export default FoodComponent;
