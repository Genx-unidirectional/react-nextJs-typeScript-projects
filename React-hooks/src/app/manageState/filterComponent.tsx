import { ChangeEvent, useState } from "react";
import { foods } from "@/lib/data";
import { filterWithQuery } from "@/lib/utils";
import SearchComponent from "../ui/manageState/searchComponent";
import FoodComponent from "../ui/manageState/foodComponent";
function FilterComponent() {
  const [query, setQuery] = useState("");

  const updatedFoods = filterWithQuery(foods, query);
  return (
    <div className="flex flex-col gap-2 overflow-hidden overflow-y-scroll bg-white w-5/6 rounded-lg h-1/2 p-2 ">
      <SearchComponent query={query} setQuery={setQuery} />
      {updatedFoods.map((foods) => (
        <FoodComponent
          id={foods.id}
          description={foods.description}
          name={foods.name}
        />
      ))}
    </div>
  );
}
export default FilterComponent;
