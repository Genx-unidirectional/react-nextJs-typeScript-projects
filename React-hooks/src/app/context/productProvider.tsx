import { ReactElement, useState, createContext } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};
const initState: ProductType[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99,
  },
];
export type UseProductType = {
  products: ProductType[];
};

const initContextState = {
  products: [],
};

export const ProductContext = createContext<UseProductType>(initContextState);
type ChildrenProp = {
  children?: ReactElement | ReactElement[];
};
const ProductProvider = ({ children }: ChildrenProp) => {
  const [products, setProduct] = useState<ProductType[]>(initState);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
