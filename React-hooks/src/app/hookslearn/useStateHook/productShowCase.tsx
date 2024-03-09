"use client";
import { Product } from "@/app/lib/hookslearn/useState/productShow";
import { table } from "console";
import { ReactElement, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";
const PRODUCTS: Product[] = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function ProductPage() {
  const [filteredText, setFilteredText] = useState<string>("");
  const [inStocked, setInStocked] = useState<boolean>(false);
  return (
    <div className="w-4/5 h-4/5 p-2 bg-indigo-600 rounded-md flex flex-col items-center  gap-12">
      <FilterBlock
        filteredText={filteredText}
        setFilteredText={setFilteredText}
        inStocked={inStocked}
        setInStocked={setInStocked}
      />
      <TableBLock inStocked={inStocked} filteredText={filteredText} />
    </div>
  );
}
interface FilterBlockProps {
  filteredText: string;
  setFilteredText: Dispatch<SetStateAction<string>>;
  inStocked: boolean;
  setInStocked: Dispatch<SetStateAction<boolean>>;
}
function FilterBlock({
  filteredText,
  setFilteredText,
  inStocked,
  setInStocked,
}: FilterBlockProps) {
  return (
    <div className="w-full p-3 flex flex-col gap-2 items-center">
      <input
        className="w-full bg-white p-2 text-2xl rounded-md text-black"
        placeholder="search..."
        type="text"
        name="product"
        id="product"
        value={filteredText}
        onChange={(e) => setFilteredText(e.target.value)}
      />
      <div className="text-xl font-bold flex justify-center gap-2 items-center">
        <input
          className="w-6 h-6"
          type="checkbox"
          name="stocked"
          id=""
          checked={inStocked}
          onChange={() => setInStocked(!inStocked)}
        />
        <label htmlFor="stocked">Filtered out the stocked products</label>
      </div>
    </div>
  );
}

interface TableBLockProps {
  inStocked: boolean;
  filteredText: string;
}

function TableBLock({ inStocked, filteredText }: TableBLockProps) {
  let lastCategory: string | null = null;
  let rows: ReactElement[] = [];
  PRODUCTS.forEach((product, idx) => {
    if (!product.name.toLowerCase().includes(filteredText)) {
      return;
    }
    if (inStocked && !product.stocked) {
      return;
    }
    if (product.category != lastCategory) {
      rows.push(
        <TableHeads key={product.category} category={product.category} />
      );
    }
    rows.push(
      <TableRows
        key={product.name}
        name={product.name}
        price={product.price}
        stocked={product.stocked}
      />
    );
    lastCategory = product.category;
  });
  return (
    <div className="w-4/5 h-1/2 overflow-hidden overflow-y-scroll  bg-white text-black p-4 rounded-lg">
      <table className="w-full mx-auto">
        <thead>
          <tr className="w-full mx-auto flex ml-4 border-b-2 justify-between">
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

type TableHeadsProps = Pick<Product, "category">;

function TableHeads({ category }: TableHeadsProps) {
  return (
    <tr>
      <th>{category}</th>
    </tr>
  );
}

type TableRowsProps = Pick<Product, "name" | "price" | "stocked">;
function TableRows({ price, name, stocked }: TableRowsProps) {
  return (
    <tr className={clsx("w-full border-b", { "text-red-500": !stocked })}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
