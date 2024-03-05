"use client";
import { Product } from "@/app/lib/hookslearn/useState/productShow";
import { ReactElement } from "react";

const PRODUCTS: Product[] = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
// Based on above data we have to design our mockup product table
export default function ProductPage() {
  const handleChange = () => {};
  return (
    <div className="h-[80%] p-2 text-white w-[80%]  bg-indigo-700 rounded-lg flex flex-col items-center">
      <FilteringComponent handleChange={handleChange} />
    </div>
  );
}

function FilteringComponent({ handleChange }: { handleChange: () => void }) {
  return (
    <div className="w-full flex flex-col gap-4 p-2 items-center">
      <input
        className="p-1 w-full text-2xl text-black bg-white rounded-lg"
        type="text"
        placeholder="search.."
      />
      <div className="flex items-center gap-2">
        <input
          className="w-6 h-6 bg-white "
          type="checkbox"
          onChange={handleChange}
          id="stock"
        />
        <label htmlFor="stock" className="font-medium text-lg">
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

function ProductTable(props: Product[]): ReactElement {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}

// function ProductCategory({category}:) {
//   return <tr></tr>;
// }
