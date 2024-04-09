import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FoodItemType } from "@/config/types";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterWithQuery(items: FoodItemType, query: string) {
  query = query.toLowerCase();
  return items.filter((item) => item.name.toLowerCase().includes(query));
}
