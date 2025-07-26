import { useState } from "react";
import { ProductsContext } from "./products.context";
import SHOP_DATA from "../shop-data.json";

export const ProductsProvider = ({ children }) => {
  const [product, setProduct] = useState(SHOP_DATA);
  const value = { product, setProduct };

  // useEffect(() => {
  //   setProduct(SHOP_DATA);
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
